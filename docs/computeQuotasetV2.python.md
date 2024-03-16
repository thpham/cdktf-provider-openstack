# `computeQuotasetV2` Submodule <a name="`computeQuotasetV2` Submodule" id="@ithings/cdktf-provider-openstack.computeQuotasetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeQuotasetV2 <a name="ComputeQuotasetV2" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2 openstack_compute_quotaset_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  cores: typing.Union[int, float] = None,
  fixed_ips: typing.Union[int, float] = None,
  floating_ips: typing.Union[int, float] = None,
  id: str = None,
  injected_file_content_bytes: typing.Union[int, float] = None,
  injected_file_path_bytes: typing.Union[int, float] = None,
  injected_files: typing.Union[int, float] = None,
  instances: typing.Union[int, float] = None,
  key_pairs: typing.Union[int, float] = None,
  metadata_items: typing.Union[int, float] = None,
  ram: typing.Union[int, float] = None,
  region: str = None,
  security_group_rules: typing.Union[int, float] = None,
  security_groups: typing.Union[int, float] = None,
  server_group_members: typing.Union[int, float] = None,
  server_groups: typing.Union[int, float] = None,
  timeouts: ComputeQuotasetV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#project_id ComputeQuotasetV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#cores ComputeQuotasetV2#cores}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.fixedIps">fixed_ips</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#fixed_ips ComputeQuotasetV2#fixed_ips}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.floatingIps">floating_ips</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#floating_ips ComputeQuotasetV2#floating_ips}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#id ComputeQuotasetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.injectedFileContentBytes">injected_file_content_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_content_bytes ComputeQuotasetV2#injected_file_content_bytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.injectedFilePathBytes">injected_file_path_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_path_bytes ComputeQuotasetV2#injected_file_path_bytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.injectedFiles">injected_files</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_files ComputeQuotasetV2#injected_files}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#instances ComputeQuotasetV2#instances}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.keyPairs">key_pairs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#key_pairs ComputeQuotasetV2#key_pairs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.metadataItems">metadata_items</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#metadata_items ComputeQuotasetV2#metadata_items}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#ram ComputeQuotasetV2#ram}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#region ComputeQuotasetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.securityGroupRules">security_group_rules</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_group_rules ComputeQuotasetV2#security_group_rules}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_groups ComputeQuotasetV2#security_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.serverGroupMembers">server_group_members</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_group_members ComputeQuotasetV2#server_group_members}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.serverGroups">server_groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_groups ComputeQuotasetV2#server_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#project_id ComputeQuotasetV2#project_id}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.cores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#cores ComputeQuotasetV2#cores}.

---

##### `fixed_ips`<sup>Optional</sup> <a name="fixed_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.fixedIps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#fixed_ips ComputeQuotasetV2#fixed_ips}.

---

##### `floating_ips`<sup>Optional</sup> <a name="floating_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.floatingIps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#floating_ips ComputeQuotasetV2#floating_ips}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#id ComputeQuotasetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `injected_file_content_bytes`<sup>Optional</sup> <a name="injected_file_content_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.injectedFileContentBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_content_bytes ComputeQuotasetV2#injected_file_content_bytes}.

---

##### `injected_file_path_bytes`<sup>Optional</sup> <a name="injected_file_path_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.injectedFilePathBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_path_bytes ComputeQuotasetV2#injected_file_path_bytes}.

---

##### `injected_files`<sup>Optional</sup> <a name="injected_files" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.injectedFiles"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_files ComputeQuotasetV2#injected_files}.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.instances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#instances ComputeQuotasetV2#instances}.

---

##### `key_pairs`<sup>Optional</sup> <a name="key_pairs" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.keyPairs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#key_pairs ComputeQuotasetV2#key_pairs}.

---

##### `metadata_items`<sup>Optional</sup> <a name="metadata_items" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.metadataItems"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#metadata_items ComputeQuotasetV2#metadata_items}.

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.ram"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#ram ComputeQuotasetV2#ram}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#region ComputeQuotasetV2#region}.

---

##### `security_group_rules`<sup>Optional</sup> <a name="security_group_rules" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.securityGroupRules"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_group_rules ComputeQuotasetV2#security_group_rules}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.securityGroups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_groups ComputeQuotasetV2#security_groups}.

---

##### `server_group_members`<sup>Optional</sup> <a name="server_group_members" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.serverGroupMembers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_group_members ComputeQuotasetV2#server_group_members}.

---

##### `server_groups`<sup>Optional</sup> <a name="server_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.serverGroups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_groups ComputeQuotasetV2#server_groups}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#timeouts ComputeQuotasetV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetCores">reset_cores</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFixedIps">reset_fixed_ips</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFloatingIps">reset_floating_ips</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFileContentBytes">reset_injected_file_content_bytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFilePathBytes">reset_injected_file_path_bytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFiles">reset_injected_files</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetKeyPairs">reset_key_pairs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetMetadataItems">reset_metadata_items</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRam">reset_ram</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroupRules">reset_security_group_rules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroupMembers">reset_server_group_members</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroups">reset_server_groups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#create ComputeQuotasetV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#delete ComputeQuotasetV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#update ComputeQuotasetV2#update}.

---

##### `reset_cores` <a name="reset_cores" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetCores"></a>

```python
def reset_cores() -> None
```

##### `reset_fixed_ips` <a name="reset_fixed_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFixedIps"></a>

```python
def reset_fixed_ips() -> None
```

##### `reset_floating_ips` <a name="reset_floating_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFloatingIps"></a>

```python
def reset_floating_ips() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_injected_file_content_bytes` <a name="reset_injected_file_content_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFileContentBytes"></a>

```python
def reset_injected_file_content_bytes() -> None
```

##### `reset_injected_file_path_bytes` <a name="reset_injected_file_path_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFilePathBytes"></a>

```python
def reset_injected_file_path_bytes() -> None
```

##### `reset_injected_files` <a name="reset_injected_files" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFiles"></a>

```python
def reset_injected_files() -> None
```

##### `reset_instances` <a name="reset_instances" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_key_pairs` <a name="reset_key_pairs" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetKeyPairs"></a>

```python
def reset_key_pairs() -> None
```

##### `reset_metadata_items` <a name="reset_metadata_items" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetMetadataItems"></a>

```python
def reset_metadata_items() -> None
```

##### `reset_ram` <a name="reset_ram" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRam"></a>

```python
def reset_ram() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_group_rules` <a name="reset_security_group_rules" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroupRules"></a>

```python
def reset_security_group_rules() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_server_group_members` <a name="reset_server_group_members" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroupMembers"></a>

```python
def reset_server_group_members() -> None
```

##### `reset_server_groups` <a name="reset_server_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroups"></a>

```python
def reset_server_groups() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeQuotasetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeQuotasetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeQuotasetV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeQuotasetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeQuotasetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference">ComputeQuotasetV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.coresInput">cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIpsInput">fixed_ips_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIpsInput">floating_ips_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytesInput">injected_file_content_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytesInput">injected_file_path_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilesInput">injected_files_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairsInput">key_pairs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItemsInput">metadata_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRulesInput">security_group_rules_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembersInput">server_group_members_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupsInput">server_groups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIps">fixed_ips</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIps">floating_ips</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytes">injected_file_content_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytes">injected_file_path_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFiles">injected_files</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairs">key_pairs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItems">metadata_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRules">security_group_rules</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroups">security_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembers">server_group_members</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroups">server_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeouts"></a>

```python
timeouts: ComputeQuotasetV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference">ComputeQuotasetV2TimeoutsOutputReference</a>

---

##### `cores_input`<sup>Optional</sup> <a name="cores_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.coresInput"></a>

```python
cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_ips_input`<sup>Optional</sup> <a name="fixed_ips_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIpsInput"></a>

```python
fixed_ips_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `floating_ips_input`<sup>Optional</sup> <a name="floating_ips_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIpsInput"></a>

```python
floating_ips_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `injected_file_content_bytes_input`<sup>Optional</sup> <a name="injected_file_content_bytes_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytesInput"></a>

```python
injected_file_content_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `injected_file_path_bytes_input`<sup>Optional</sup> <a name="injected_file_path_bytes_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytesInput"></a>

```python
injected_file_path_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `injected_files_input`<sup>Optional</sup> <a name="injected_files_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilesInput"></a>

```python
injected_files_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_pairs_input`<sup>Optional</sup> <a name="key_pairs_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairsInput"></a>

```python
key_pairs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_items_input`<sup>Optional</sup> <a name="metadata_items_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItemsInput"></a>

```python
metadata_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_group_rules_input`<sup>Optional</sup> <a name="security_group_rules_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRulesInput"></a>

```python
security_group_rules_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupsInput"></a>

```python
security_groups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_group_members_input`<sup>Optional</sup> <a name="server_group_members_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembersInput"></a>

```python
server_group_members_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_groups_input`<sup>Optional</sup> <a name="server_groups_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupsInput"></a>

```python
server_groups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeQuotasetV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_ips`<sup>Required</sup> <a name="fixed_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIps"></a>

```python
fixed_ips: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `floating_ips`<sup>Required</sup> <a name="floating_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIps"></a>

```python
floating_ips: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `injected_file_content_bytes`<sup>Required</sup> <a name="injected_file_content_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytes"></a>

```python
injected_file_content_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `injected_file_path_bytes`<sup>Required</sup> <a name="injected_file_path_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytes"></a>

```python
injected_file_path_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `injected_files`<sup>Required</sup> <a name="injected_files" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFiles"></a>

```python
injected_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_pairs`<sup>Required</sup> <a name="key_pairs" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairs"></a>

```python
key_pairs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_items`<sup>Required</sup> <a name="metadata_items" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItems"></a>

```python
metadata_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_group_rules`<sup>Required</sup> <a name="security_group_rules" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRules"></a>

```python
security_group_rules: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroups"></a>

```python
security_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_group_members`<sup>Required</sup> <a name="server_group_members" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembers"></a>

```python
server_group_members: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_groups`<sup>Required</sup> <a name="server_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroups"></a>

```python
server_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeQuotasetV2Config <a name="ComputeQuotasetV2Config" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  cores: typing.Union[int, float] = None,
  fixed_ips: typing.Union[int, float] = None,
  floating_ips: typing.Union[int, float] = None,
  id: str = None,
  injected_file_content_bytes: typing.Union[int, float] = None,
  injected_file_path_bytes: typing.Union[int, float] = None,
  injected_files: typing.Union[int, float] = None,
  instances: typing.Union[int, float] = None,
  key_pairs: typing.Union[int, float] = None,
  metadata_items: typing.Union[int, float] = None,
  ram: typing.Union[int, float] = None,
  region: str = None,
  security_group_rules: typing.Union[int, float] = None,
  security_groups: typing.Union[int, float] = None,
  server_group_members: typing.Union[int, float] = None,
  server_groups: typing.Union[int, float] = None,
  timeouts: ComputeQuotasetV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#project_id ComputeQuotasetV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#cores ComputeQuotasetV2#cores}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.fixedIps">fixed_ips</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#fixed_ips ComputeQuotasetV2#fixed_ips}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.floatingIps">floating_ips</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#floating_ips ComputeQuotasetV2#floating_ips}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#id ComputeQuotasetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFileContentBytes">injected_file_content_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_content_bytes ComputeQuotasetV2#injected_file_content_bytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFilePathBytes">injected_file_path_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_path_bytes ComputeQuotasetV2#injected_file_path_bytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFiles">injected_files</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_files ComputeQuotasetV2#injected_files}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#instances ComputeQuotasetV2#instances}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.keyPairs">key_pairs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#key_pairs ComputeQuotasetV2#key_pairs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.metadataItems">metadata_items</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#metadata_items ComputeQuotasetV2#metadata_items}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#ram ComputeQuotasetV2#ram}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#region ComputeQuotasetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroupRules">security_group_rules</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_group_rules ComputeQuotasetV2#security_group_rules}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroups">security_groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_groups ComputeQuotasetV2#security_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroupMembers">server_group_members</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_group_members ComputeQuotasetV2#server_group_members}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroups">server_groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_groups ComputeQuotasetV2#server_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#project_id ComputeQuotasetV2#project_id}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#cores ComputeQuotasetV2#cores}.

---

##### `fixed_ips`<sup>Optional</sup> <a name="fixed_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.fixedIps"></a>

```python
fixed_ips: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#fixed_ips ComputeQuotasetV2#fixed_ips}.

---

##### `floating_ips`<sup>Optional</sup> <a name="floating_ips" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.floatingIps"></a>

```python
floating_ips: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#floating_ips ComputeQuotasetV2#floating_ips}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#id ComputeQuotasetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `injected_file_content_bytes`<sup>Optional</sup> <a name="injected_file_content_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFileContentBytes"></a>

```python
injected_file_content_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_content_bytes ComputeQuotasetV2#injected_file_content_bytes}.

---

##### `injected_file_path_bytes`<sup>Optional</sup> <a name="injected_file_path_bytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFilePathBytes"></a>

```python
injected_file_path_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_path_bytes ComputeQuotasetV2#injected_file_path_bytes}.

---

##### `injected_files`<sup>Optional</sup> <a name="injected_files" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFiles"></a>

```python
injected_files: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_files ComputeQuotasetV2#injected_files}.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#instances ComputeQuotasetV2#instances}.

---

##### `key_pairs`<sup>Optional</sup> <a name="key_pairs" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.keyPairs"></a>

```python
key_pairs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#key_pairs ComputeQuotasetV2#key_pairs}.

---

##### `metadata_items`<sup>Optional</sup> <a name="metadata_items" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.metadataItems"></a>

```python
metadata_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#metadata_items ComputeQuotasetV2#metadata_items}.

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#ram ComputeQuotasetV2#ram}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#region ComputeQuotasetV2#region}.

---

##### `security_group_rules`<sup>Optional</sup> <a name="security_group_rules" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroupRules"></a>

```python
security_group_rules: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_group_rules ComputeQuotasetV2#security_group_rules}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroups"></a>

```python
security_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_groups ComputeQuotasetV2#security_groups}.

---

##### `server_group_members`<sup>Optional</sup> <a name="server_group_members" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroupMembers"></a>

```python
server_group_members: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_group_members ComputeQuotasetV2#server_group_members}.

---

##### `server_groups`<sup>Optional</sup> <a name="server_groups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroups"></a>

```python
server_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_groups ComputeQuotasetV2#server_groups}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.timeouts"></a>

```python
timeouts: ComputeQuotasetV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#timeouts ComputeQuotasetV2#timeouts}

---

### ComputeQuotasetV2Timeouts <a name="ComputeQuotasetV2Timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#create ComputeQuotasetV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#delete ComputeQuotasetV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#update ComputeQuotasetV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#create ComputeQuotasetV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#delete ComputeQuotasetV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#update ComputeQuotasetV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeQuotasetV2TimeoutsOutputReference <a name="ComputeQuotasetV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_quotaset_v2

computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeQuotasetV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>]

---



