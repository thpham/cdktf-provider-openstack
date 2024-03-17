
# CDKTF prebuilt bindings for terraform-provider-openstack/openstack provider version 1.54.1

This repo builds and publishes the [Terraform openstack provider](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs) bindings for [CDK for Terraform](https://cdk.tf).

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@thpham/provider-openstack](https://www.npmjs.com/package/@thpham/provider-openstack).

`npm install @thpham/provider-openstack`

### PyPI

The PyPI package is available at [https://pypi.org/project/thpham-cdktf-provider-openstack](https://pypi.org/project/thpham-cdktf-provider-openstack).

`pipenv install thpham-cdktf-provider-openstack`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/ithings.Cdktf.Providers.Openstack](https://www.nuget.org/packages/ithings.Cdktf.Providers.Openstack).

`dotnet add package ithings.Cdktf.Providers.Openstack`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.ithings.cdktf/cdktf-provider-openstack](https://mvnrepository.com/artifact/com.ithings.cdktf/cdktf-provider-openstack).

```
<dependency>
    <groupId>com.ithings.cdktf</groupId>
    <artifactId>cdktf-provider-openstack</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```

### Go

The go package is generated into the [`github.com/thpham/cdktf-provider-openstack-go`](https://github.com/thpham/cdktf-provider-openstack-go) package.

`go get github.com/thpham/cdktf-provider-openstack-go/openstack/<version>`

Where `<version>` is the version of the prebuilt provider you would like to use e.g. `v11`. The full module name can be found
within the [go.mod](https://github.com/thpham/cdktf-provider-openstack-go/blob/main/openstack/go.mod#L1) file.

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-openstack).

## Versioning

This project is explicitly not tracking the Terraform openstack provider version 1:1. In fact, it always tracks `latest` of `~> 1.54` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by [generating the provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [CDK for Terraform](https://cdk.tf)
- [Terraform openstack provider](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [CDK for Terraform](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### Projen

This is mostly based on [Projen](https://github.com/projen/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on Projen

There's a custom [project builder](https://github.com/cdktf/cdktf-provider-project) which encapsulate the common settings for all `cdktf` prebuilt providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [CDKTF Repository Manager](https://github.com/cdktf/cdktf-repository-manager/).
