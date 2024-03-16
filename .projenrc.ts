import { CdktfProviderProject } from "@cdktf/provider-project";
//import { cdk, Task, Semver } from "projen";

const project = new CdktfProviderProject({
  author: "Thomas Pham",
  authorName: "thpham",
  authorAddress: "https://blog.ithings.ch",
  authorOrganization: false,
  licensee: "Thomas Pham",
  repositoryUrl: "https://github.com/thpham/cdktf-provider-openstack.git",
  name: "cdktf-provider-openstack",
  packageName: "@ithings/cdktf-provider-openstack",
  description: 'CDKTF provider for Openstack',
  terraformProvider: "terraform-provider-openstack/openstack@~> 1.54",
  cdktfVersion: "^0.20.0",
  constructsVersion: "^10.3.0",
  minNodeVersion: "18.12.0",
  jsiiVersion: "~5.3.0",
  typescriptVersion: "~5.3.0", // NOTE: this should be the same major/minor version as JSII
  devDeps: ["@cdktf/provider-project@^0.5.0"],
  defaultReleaseBranch: "main",
  namespace: "cdktf",
  githubNamespace: "thpham",
  nugetOrg: "ithings",
  mavenOrg: "ithings",
  mavenGroupId: "com.ithings.cdktf",
  useCustomGithubRunner: false,
  isDeprecated: false,
  stability: "experimental",
  creationYear: 2024,
  publishDryRun: false,
  releaseToNpm: true,
  publishToPypi: undefined,
  publishToGo: undefined,
  publishToMaven: undefined,
  publishToNuget: undefined,
  projenrcTs: true,
  releaseFailureIssue: false,
  prettier: true,
  
  workflowGitIdentity: {
    name: "thpham",
    email: "thpham@users.noreply.github.com",
  },
});

const docgen = project.tasks.tryFind("docgen");
if (!docgen) {
  throw new Error("docgen task not found");
}
docgen.reset();
docgen.exec("rm -rf docs && rm -f API.md && mkdir docs && jsii-docgen -o docs/API --split-by-submodule -l typescript -l python");

const packageAll = project.tasks.tryFind("package-all");
if (!packageAll) {
  throw new Error("package-all task not found");
}
packageAll.reset();

const packageJS = project.tasks.tryFind("package:js");
if (!packageJS) {
  throw new Error("package:js task not found");
}
packageAll.spawn(packageJS)

const packagePython = project.tasks.tryFind("package:python");
if (!packagePython) {
  throw new Error("package:python task not found");
}
packageAll.spawn(packagePython)

const releaseWF = project.github?.tryFindWorkflow("release")
releaseWF?.removeJob("release_maven")
releaseWF?.removeJob("release_nuget")
releaseWF?.removeJob("release_golang")

//project.addGitIgnore("!API.md");
project.synth();