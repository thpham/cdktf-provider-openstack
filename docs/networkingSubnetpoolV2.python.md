# `networkingSubnetpoolV2` Submodule <a name="`networkingSubnetpoolV2` Submodule" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingSubnetpoolV2 <a name="NetworkingSubnetpoolV2" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2 openstack_networking_subnetpool_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  prefixes: typing.List[str],
  address_scope_id: str = None,
  default_prefixlen: typing.Union[int, float] = None,
  default_quota: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  ip_version: typing.Union[int, float] = None,
  is_default: typing.Union[bool, IResolvable] = None,
  max_prefixlen: typing.Union[int, float] = None,
  min_prefixlen: typing.Union[int, float] = None,
  project_id: str = None,
  region: str = None,
  shared: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: NetworkingSubnetpoolV2Timeouts = None,
  value_specs: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#name NetworkingSubnetpoolV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#prefixes NetworkingSubnetpoolV2#prefixes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.addressScopeId">address_scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#address_scope_id NetworkingSubnetpoolV2#address_scope_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.defaultPrefixlen">default_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_prefixlen NetworkingSubnetpoolV2#default_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.defaultQuota">default_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_quota NetworkingSubnetpoolV2#default_quota}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#description NetworkingSubnetpoolV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#id NetworkingSubnetpoolV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#ip_version NetworkingSubnetpoolV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#is_default NetworkingSubnetpoolV2#is_default}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.maxPrefixlen">max_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#max_prefixlen NetworkingSubnetpoolV2#max_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.minPrefixlen">min_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#min_prefixlen NetworkingSubnetpoolV2#min_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#project_id NetworkingSubnetpoolV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#region NetworkingSubnetpoolV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#shared NetworkingSubnetpoolV2#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#tags NetworkingSubnetpoolV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#value_specs NetworkingSubnetpoolV2#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#name NetworkingSubnetpoolV2#name}.

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.prefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#prefixes NetworkingSubnetpoolV2#prefixes}.

---

##### `address_scope_id`<sup>Optional</sup> <a name="address_scope_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.addressScopeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#address_scope_id NetworkingSubnetpoolV2#address_scope_id}.

---

##### `default_prefixlen`<sup>Optional</sup> <a name="default_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.defaultPrefixlen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_prefixlen NetworkingSubnetpoolV2#default_prefixlen}.

---

##### `default_quota`<sup>Optional</sup> <a name="default_quota" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.defaultQuota"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_quota NetworkingSubnetpoolV2#default_quota}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#description NetworkingSubnetpoolV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#id NetworkingSubnetpoolV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.ipVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#ip_version NetworkingSubnetpoolV2#ip_version}.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#is_default NetworkingSubnetpoolV2#is_default}.

---

##### `max_prefixlen`<sup>Optional</sup> <a name="max_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.maxPrefixlen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#max_prefixlen NetworkingSubnetpoolV2#max_prefixlen}.

---

##### `min_prefixlen`<sup>Optional</sup> <a name="min_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.minPrefixlen"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#min_prefixlen NetworkingSubnetpoolV2#min_prefixlen}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#project_id NetworkingSubnetpoolV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#region NetworkingSubnetpoolV2#region}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.shared"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#shared NetworkingSubnetpoolV2#shared}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#tags NetworkingSubnetpoolV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#timeouts NetworkingSubnetpoolV2#timeouts}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.Initializer.parameter.valueSpecs"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#value_specs NetworkingSubnetpoolV2#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetAddressScopeId">reset_address_scope_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetDefaultPrefixlen">reset_default_prefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetDefaultQuota">reset_default_quota</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetMaxPrefixlen">reset_max_prefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetMinPrefixlen">reset_min_prefixlen</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetShared">reset_shared</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetValueSpecs">reset_value_specs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#create NetworkingSubnetpoolV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#delete NetworkingSubnetpoolV2#delete}.

---

##### `reset_address_scope_id` <a name="reset_address_scope_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetAddressScopeId"></a>

```python
def reset_address_scope_id() -> None
```

##### `reset_default_prefixlen` <a name="reset_default_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetDefaultPrefixlen"></a>

```python
def reset_default_prefixlen() -> None
```

##### `reset_default_quota` <a name="reset_default_quota" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetDefaultQuota"></a>

```python
def reset_default_quota() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_max_prefixlen` <a name="reset_max_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetMaxPrefixlen"></a>

```python
def reset_max_prefixlen() -> None
```

##### `reset_min_prefixlen` <a name="reset_min_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetMinPrefixlen"></a>

```python
def reset_min_prefixlen() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_shared` <a name="reset_shared" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetShared"></a>

```python
def reset_shared() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_value_specs` <a name="reset_value_specs" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.resetValueSpecs"></a>

```python
def reset_value_specs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkingSubnetpoolV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkingSubnetpoolV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingSubnetpoolV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.allTags">all_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.revisionNumber">revision_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference">NetworkingSubnetpoolV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.addressScopeIdInput">address_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultPrefixlenInput">default_prefixlen_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultQuotaInput">default_quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.ipVersionInput">ip_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.maxPrefixlenInput">max_prefixlen_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.minPrefixlenInput">min_prefixlen_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.prefixesInput">prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.sharedInput">shared_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.valueSpecsInput">value_specs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.addressScopeId">address_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultPrefixlen">default_prefixlen</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultQuota">default_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.maxPrefixlen">max_prefixlen</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.minPrefixlen">min_prefixlen</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_tags`<sup>Required</sup> <a name="all_tags" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.allTags"></a>

```python
all_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `revision_number`<sup>Required</sup> <a name="revision_number" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.revisionNumber"></a>

```python
revision_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.timeouts"></a>

```python
timeouts: NetworkingSubnetpoolV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference">NetworkingSubnetpoolV2TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `address_scope_id_input`<sup>Optional</sup> <a name="address_scope_id_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.addressScopeIdInput"></a>

```python
address_scope_id_input: str
```

- *Type:* str

---

##### `default_prefixlen_input`<sup>Optional</sup> <a name="default_prefixlen_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultPrefixlenInput"></a>

```python
default_prefixlen_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_quota_input`<sup>Optional</sup> <a name="default_quota_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultQuotaInput"></a>

```python
default_quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.ipVersionInput"></a>

```python
ip_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_prefixlen_input`<sup>Optional</sup> <a name="max_prefixlen_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.maxPrefixlenInput"></a>

```python
max_prefixlen_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_prefixlen_input`<sup>Optional</sup> <a name="min_prefixlen_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.minPrefixlenInput"></a>

```python
min_prefixlen_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prefixes_input`<sup>Optional</sup> <a name="prefixes_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.prefixesInput"></a>

```python
prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `shared_input`<sup>Optional</sup> <a name="shared_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.sharedInput"></a>

```python
shared_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkingSubnetpoolV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a>]

---

##### `value_specs_input`<sup>Optional</sup> <a name="value_specs_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.valueSpecsInput"></a>

```python
value_specs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `address_scope_id`<sup>Required</sup> <a name="address_scope_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.addressScopeId"></a>

```python
address_scope_id: str
```

- *Type:* str

---

##### `default_prefixlen`<sup>Required</sup> <a name="default_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultPrefixlen"></a>

```python
default_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_quota`<sup>Required</sup> <a name="default_quota" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.defaultQuota"></a>

```python
default_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_prefixlen`<sup>Required</sup> <a name="max_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.maxPrefixlen"></a>

```python
max_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_prefixlen`<sup>Required</sup> <a name="min_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.minPrefixlen"></a>

```python
min_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_specs`<sup>Required</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingSubnetpoolV2Config <a name="NetworkingSubnetpoolV2Config" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  prefixes: typing.List[str],
  address_scope_id: str = None,
  default_prefixlen: typing.Union[int, float] = None,
  default_quota: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  ip_version: typing.Union[int, float] = None,
  is_default: typing.Union[bool, IResolvable] = None,
  max_prefixlen: typing.Union[int, float] = None,
  min_prefixlen: typing.Union[int, float] = None,
  project_id: str = None,
  region: str = None,
  shared: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: NetworkingSubnetpoolV2Timeouts = None,
  value_specs: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#name NetworkingSubnetpoolV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#prefixes NetworkingSubnetpoolV2#prefixes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.addressScopeId">address_scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#address_scope_id NetworkingSubnetpoolV2#address_scope_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.defaultPrefixlen">default_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_prefixlen NetworkingSubnetpoolV2#default_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.defaultQuota">default_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_quota NetworkingSubnetpoolV2#default_quota}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#description NetworkingSubnetpoolV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#id NetworkingSubnetpoolV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#ip_version NetworkingSubnetpoolV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#is_default NetworkingSubnetpoolV2#is_default}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.maxPrefixlen">max_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#max_prefixlen NetworkingSubnetpoolV2#max_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.minPrefixlen">min_prefixlen</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#min_prefixlen NetworkingSubnetpoolV2#min_prefixlen}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#project_id NetworkingSubnetpoolV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#region NetworkingSubnetpoolV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.shared">shared</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#shared NetworkingSubnetpoolV2#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#tags NetworkingSubnetpoolV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#value_specs NetworkingSubnetpoolV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#name NetworkingSubnetpoolV2#name}.

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#prefixes NetworkingSubnetpoolV2#prefixes}.

---

##### `address_scope_id`<sup>Optional</sup> <a name="address_scope_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.addressScopeId"></a>

```python
address_scope_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#address_scope_id NetworkingSubnetpoolV2#address_scope_id}.

---

##### `default_prefixlen`<sup>Optional</sup> <a name="default_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.defaultPrefixlen"></a>

```python
default_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_prefixlen NetworkingSubnetpoolV2#default_prefixlen}.

---

##### `default_quota`<sup>Optional</sup> <a name="default_quota" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.defaultQuota"></a>

```python
default_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#default_quota NetworkingSubnetpoolV2#default_quota}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#description NetworkingSubnetpoolV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#id NetworkingSubnetpoolV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#ip_version NetworkingSubnetpoolV2#ip_version}.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#is_default NetworkingSubnetpoolV2#is_default}.

---

##### `max_prefixlen`<sup>Optional</sup> <a name="max_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.maxPrefixlen"></a>

```python
max_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#max_prefixlen NetworkingSubnetpoolV2#max_prefixlen}.

---

##### `min_prefixlen`<sup>Optional</sup> <a name="min_prefixlen" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.minPrefixlen"></a>

```python
min_prefixlen: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#min_prefixlen NetworkingSubnetpoolV2#min_prefixlen}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#project_id NetworkingSubnetpoolV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#region NetworkingSubnetpoolV2#region}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.shared"></a>

```python
shared: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#shared NetworkingSubnetpoolV2#shared}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#tags NetworkingSubnetpoolV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.timeouts"></a>

```python
timeouts: NetworkingSubnetpoolV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#timeouts NetworkingSubnetpoolV2#timeouts}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Config.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#value_specs NetworkingSubnetpoolV2#value_specs}.

---

### NetworkingSubnetpoolV2Timeouts <a name="NetworkingSubnetpoolV2Timeouts" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#create NetworkingSubnetpoolV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#delete NetworkingSubnetpoolV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#create NetworkingSubnetpoolV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_subnetpool_v2#delete NetworkingSubnetpoolV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingSubnetpoolV2TimeoutsOutputReference <a name="NetworkingSubnetpoolV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_subnetpool_v2

networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkingSubnetpoolV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingSubnetpoolV2.NetworkingSubnetpoolV2Timeouts">NetworkingSubnetpoolV2Timeouts</a>]

---



