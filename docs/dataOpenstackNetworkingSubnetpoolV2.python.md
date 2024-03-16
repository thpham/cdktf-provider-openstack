# `dataOpenstackNetworkingSubnetpoolV2` Submodule <a name="`dataOpenstackNetworkingSubnetpoolV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingSubnetpoolV2 <a name="DataOpenstackNetworkingSubnetpoolV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2 openstack_networking_subnetpool_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnetpool_v2

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_scope_id: str = None,
  default_prefixlen: typing.Union[int, float] = None,
  default_quota: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  ip_version: typing.Union[int, float] = None,
  is_default: typing.Union[bool, IResolvable] = None,
  max_prefixlen: typing.Union[int, float] = None,
  min_prefixlen: typing.Union[int, float] = None,
  name: str = None,
  project_id: str = None,
  region: str = None,
  shared: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.addressScopeId">address_scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#address_scope_id DataOpenstackNetworkingSubnetpoolV2#address_scope_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.defaultPrefixlen">default_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_prefixlen DataOpenstackNetworkingSubnetpoolV2#default_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.defaultQuota">default_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_quota DataOpenstackNetworkingSubnetpoolV2#default_quota}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#description DataOpenstackNetworkingSubnetpoolV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#id DataOpenstackNetworkingSubnetpoolV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#ip_version DataOpenstackNetworkingSubnetpoolV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#is_default DataOpenstackNetworkingSubnetpoolV2#is_default}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.maxPrefixlen">max_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#max_prefixlen DataOpenstackNetworkingSubnetpoolV2#max_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.minPrefixlen">min_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#min_prefixlen DataOpenstackNetworkingSubnetpoolV2#min_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#name DataOpenstackNetworkingSubnetpoolV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#project_id DataOpenstackNetworkingSubnetpoolV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#region DataOpenstackNetworkingSubnetpoolV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#shared DataOpenstackNetworkingSubnetpoolV2#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#tags DataOpenstackNetworkingSubnetpoolV2#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_scope_id`<sup>Optional</sup> <a name="address_scope_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.addressScopeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#address_scope_id DataOpenstackNetworkingSubnetpoolV2#address_scope_id}.

---

##### `default_prefixlen`<sup>Optional</sup> <a name="default_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.defaultPrefixlen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_prefixlen DataOpenstackNetworkingSubnetpoolV2#default_prefixlen}.

---

##### `default_quota`<sup>Optional</sup> <a name="default_quota" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.defaultQuota"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_quota DataOpenstackNetworkingSubnetpoolV2#default_quota}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#description DataOpenstackNetworkingSubnetpoolV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#id DataOpenstackNetworkingSubnetpoolV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.ipVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#ip_version DataOpenstackNetworkingSubnetpoolV2#ip_version}.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#is_default DataOpenstackNetworkingSubnetpoolV2#is_default}.

---

##### `max_prefixlen`<sup>Optional</sup> <a name="max_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.maxPrefixlen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#max_prefixlen DataOpenstackNetworkingSubnetpoolV2#max_prefixlen}.

---

##### `min_prefixlen`<sup>Optional</sup> <a name="min_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.minPrefixlen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#min_prefixlen DataOpenstackNetworkingSubnetpoolV2#min_prefixlen}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#name DataOpenstackNetworkingSubnetpoolV2#name}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#project_id DataOpenstackNetworkingSubnetpoolV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#region DataOpenstackNetworkingSubnetpoolV2#region}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.shared"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#shared DataOpenstackNetworkingSubnetpoolV2#shared}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#tags DataOpenstackNetworkingSubnetpoolV2#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetAddressScopeId">reset_address_scope_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultPrefixlen">reset_default_prefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultQuota">reset_default_quota</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMaxPrefixlen">reset_max_prefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMinPrefixlen">reset_min_prefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetShared">reset_shared</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_address_scope_id` <a name="reset_address_scope_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetAddressScopeId"></a>

```python
def reset_address_scope_id() -> None
```

##### `reset_default_prefixlen` <a name="reset_default_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultPrefixlen"></a>

```python
def reset_default_prefixlen() -> None
```

##### `reset_default_quota` <a name="reset_default_quota" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDefaultQuota"></a>

```python
def reset_default_quota() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_max_prefixlen` <a name="reset_max_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMaxPrefixlen"></a>

```python
def reset_max_prefixlen() -> None
```

##### `reset_min_prefixlen` <a name="reset_min_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetMinPrefixlen"></a>

```python
def reset_min_prefixlen() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_shared` <a name="reset_shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetShared"></a>

```python
def reset_shared() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnetpool_v2

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnetpool_v2

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnetpool_v2

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnetpool_v2

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackNetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackNetworkingSubnetpoolV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackNetworkingSubnetpoolV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingSubnetpoolV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.allTags">all_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.revisionNumber">revision_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeIdInput">address_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlenInput">default_prefixlen_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuotaInput">default_quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersionInput">ip_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlenInput">max_prefixlen_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlenInput">min_prefixlen_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.sharedInput">shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeId">address_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlen">default_prefixlen</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuota">default_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlen">max_prefixlen</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlen">min_prefixlen</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `all_tags`<sup>Required</sup> <a name="all_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.allTags"></a>

```python
all_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revision_number`<sup>Required</sup> <a name="revision_number" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.revisionNumber"></a>

```python
revision_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `address_scope_id_input`<sup>Optional</sup> <a name="address_scope_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeIdInput"></a>

```python
address_scope_id_input: str
```

- *Type:* str

---

##### `default_prefixlen_input`<sup>Optional</sup> <a name="default_prefixlen_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlenInput"></a>

```python
default_prefixlen_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_quota_input`<sup>Optional</sup> <a name="default_quota_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuotaInput"></a>

```python
default_quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersionInput"></a>

```python
ip_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_prefixlen_input`<sup>Optional</sup> <a name="max_prefixlen_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlenInput"></a>

```python
max_prefixlen_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_prefixlen_input`<sup>Optional</sup> <a name="min_prefixlen_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlenInput"></a>

```python
min_prefixlen_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `shared_input`<sup>Optional</sup> <a name="shared_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.sharedInput"></a>

```python
shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_scope_id`<sup>Required</sup> <a name="address_scope_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.addressScopeId"></a>

```python
address_scope_id: str
```

- *Type:* str

---

##### `default_prefixlen`<sup>Required</sup> <a name="default_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultPrefixlen"></a>

```python
default_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_quota`<sup>Required</sup> <a name="default_quota" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.defaultQuota"></a>

```python
default_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_prefixlen`<sup>Required</sup> <a name="max_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.maxPrefixlen"></a>

```python
max_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_prefixlen`<sup>Required</sup> <a name="min_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.minPrefixlen"></a>

```python
min_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingSubnetpoolV2Config <a name="DataOpenstackNetworkingSubnetpoolV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnetpool_v2

dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_scope_id: str = None,
  default_prefixlen: typing.Union[int, float] = None,
  default_quota: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  ip_version: typing.Union[int, float] = None,
  is_default: typing.Union[bool, IResolvable] = None,
  max_prefixlen: typing.Union[int, float] = None,
  min_prefixlen: typing.Union[int, float] = None,
  name: str = None,
  project_id: str = None,
  region: str = None,
  shared: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.addressScopeId">address_scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#address_scope_id DataOpenstackNetworkingSubnetpoolV2#address_scope_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultPrefixlen">default_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_prefixlen DataOpenstackNetworkingSubnetpoolV2#default_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultQuota">default_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_quota DataOpenstackNetworkingSubnetpoolV2#default_quota}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#description DataOpenstackNetworkingSubnetpoolV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#id DataOpenstackNetworkingSubnetpoolV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#ip_version DataOpenstackNetworkingSubnetpoolV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#is_default DataOpenstackNetworkingSubnetpoolV2#is_default}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.maxPrefixlen">max_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#max_prefixlen DataOpenstackNetworkingSubnetpoolV2#max_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.minPrefixlen">min_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#min_prefixlen DataOpenstackNetworkingSubnetpoolV2#min_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#name DataOpenstackNetworkingSubnetpoolV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#project_id DataOpenstackNetworkingSubnetpoolV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#region DataOpenstackNetworkingSubnetpoolV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#shared DataOpenstackNetworkingSubnetpoolV2#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#tags DataOpenstackNetworkingSubnetpoolV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_scope_id`<sup>Optional</sup> <a name="address_scope_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.addressScopeId"></a>

```python
address_scope_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#address_scope_id DataOpenstackNetworkingSubnetpoolV2#address_scope_id}.

---

##### `default_prefixlen`<sup>Optional</sup> <a name="default_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultPrefixlen"></a>

```python
default_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_prefixlen DataOpenstackNetworkingSubnetpoolV2#default_prefixlen}.

---

##### `default_quota`<sup>Optional</sup> <a name="default_quota" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.defaultQuota"></a>

```python
default_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#default_quota DataOpenstackNetworkingSubnetpoolV2#default_quota}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#description DataOpenstackNetworkingSubnetpoolV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#id DataOpenstackNetworkingSubnetpoolV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#ip_version DataOpenstackNetworkingSubnetpoolV2#ip_version}.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#is_default DataOpenstackNetworkingSubnetpoolV2#is_default}.

---

##### `max_prefixlen`<sup>Optional</sup> <a name="max_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.maxPrefixlen"></a>

```python
max_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#max_prefixlen DataOpenstackNetworkingSubnetpoolV2#max_prefixlen}.

---

##### `min_prefixlen`<sup>Optional</sup> <a name="min_prefixlen" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.minPrefixlen"></a>

```python
min_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#min_prefixlen DataOpenstackNetworkingSubnetpoolV2#min_prefixlen}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#name DataOpenstackNetworkingSubnetpoolV2#name}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#project_id DataOpenstackNetworkingSubnetpoolV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#region DataOpenstackNetworkingSubnetpoolV2#region}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#shared DataOpenstackNetworkingSubnetpoolV2#shared}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetpoolV2.DataOpenstackNetworkingSubnetpoolV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnetpool_v2#tags DataOpenstackNetworkingSubnetpoolV2#tags}.

---



