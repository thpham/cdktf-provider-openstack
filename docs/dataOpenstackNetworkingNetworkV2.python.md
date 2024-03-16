# `dataOpenstackNetworkingNetworkV2` Submodule <a name="`dataOpenstackNetworkingNetworkV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingNetworkV2 <a name="DataOpenstackNetworkingNetworkV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2 openstack_networking_network_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  external: typing.Union[bool, IResolvable] = None,
  id: str = None,
  matching_subnet_cidr: str = None,
  mtu: typing.Union[int, float] = None,
  name: str = None,
  network_id: str = None,
  region: str = None,
  status: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None,
  transparent_vlan: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#description DataOpenstackNetworkingNetworkV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.external">external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#external DataOpenstackNetworkingNetworkV2#external}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#id DataOpenstackNetworkingNetworkV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.matchingSubnetCidr">matching_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#matching_subnet_cidr DataOpenstackNetworkingNetworkV2#matching_subnet_cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#mtu DataOpenstackNetworkingNetworkV2#mtu}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#name DataOpenstackNetworkingNetworkV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#network_id DataOpenstackNetworkingNetworkV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#region DataOpenstackNetworkingNetworkV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#status DataOpenstackNetworkingNetworkV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tags DataOpenstackNetworkingNetworkV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.transparentVlan">transparent_vlan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#transparent_vlan DataOpenstackNetworkingNetworkV2#transparent_vlan}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#description DataOpenstackNetworkingNetworkV2#description}.

---

##### `external`<sup>Optional</sup> <a name="external" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.external"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#external DataOpenstackNetworkingNetworkV2#external}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#id DataOpenstackNetworkingNetworkV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matching_subnet_cidr`<sup>Optional</sup> <a name="matching_subnet_cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.matchingSubnetCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#matching_subnet_cidr DataOpenstackNetworkingNetworkV2#matching_subnet_cidr}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.mtu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#mtu DataOpenstackNetworkingNetworkV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#name DataOpenstackNetworkingNetworkV2#name}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#network_id DataOpenstackNetworkingNetworkV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#region DataOpenstackNetworkingNetworkV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#status DataOpenstackNetworkingNetworkV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tags DataOpenstackNetworkingNetworkV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.tenantId"></a>

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tenant_id DataOpenstackNetworkingNetworkV2#tenant_id}

---

##### `transparent_vlan`<sup>Optional</sup> <a name="transparent_vlan" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.transparentVlan"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#transparent_vlan DataOpenstackNetworkingNetworkV2#transparent_vlan}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetExternal">reset_external</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMatchingSubnetCidr">reset_matching_subnet_cidr</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTransparentVlan">reset_transparent_vlan</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external` <a name="reset_external" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetExternal"></a>

```python
def reset_external() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_matching_subnet_cidr` <a name="reset_matching_subnet_cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMatchingSubnetCidr"></a>

```python
def reset_matching_subnet_cidr() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_transparent_vlan` <a name="reset_transparent_vlan" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTransparentVlan"></a>

```python
def reset_transparent_vlan() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingNetworkV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackNetworkingNetworkV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackNetworkingNetworkV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackNetworkingNetworkV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingNetworkV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.adminStateUp">admin_state_up</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.allTags">all_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.availabilityZoneHints">availability_zone_hints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dnsDomain">dns_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.segments">segments</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList">DataOpenstackNetworkingNetworkV2SegmentsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.shared">shared</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.externalInput">external_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidrInput">matching_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtuInput">mtu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlanInput">transparent_vlan_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.external">external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidr">matching_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlan">transparent_vlan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.adminStateUp"></a>

```python
admin_state_up: str
```

- *Type:* str

---

##### `all_tags`<sup>Required</sup> <a name="all_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.allTags"></a>

```python
all_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone_hints`<sup>Required</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.availabilityZoneHints"></a>

```python
availability_zone_hints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_domain`<sup>Required</sup> <a name="dns_domain" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.segments"></a>

```python
segments: DataOpenstackNetworkingNetworkV2SegmentsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList">DataOpenstackNetworkingNetworkV2SegmentsList</a>

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.shared"></a>

```python
shared: str
```

- *Type:* str

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_input`<sup>Optional</sup> <a name="external_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.externalInput"></a>

```python
external_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `matching_subnet_cidr_input`<sup>Optional</sup> <a name="matching_subnet_cidr_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidrInput"></a>

```python
matching_subnet_cidr_input: str
```

- *Type:* str

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtuInput"></a>

```python
mtu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `transparent_vlan_input`<sup>Optional</sup> <a name="transparent_vlan_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlanInput"></a>

```python
transparent_vlan_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external`<sup>Required</sup> <a name="external" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.external"></a>

```python
external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `matching_subnet_cidr`<sup>Required</sup> <a name="matching_subnet_cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidr"></a>

```python
matching_subnet_cidr: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `transparent_vlan`<sup>Required</sup> <a name="transparent_vlan" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlan"></a>

```python
transparent_vlan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingNetworkV2Config <a name="DataOpenstackNetworkingNetworkV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  external: typing.Union[bool, IResolvable] = None,
  id: str = None,
  matching_subnet_cidr: str = None,
  mtu: typing.Union[int, float] = None,
  name: str = None,
  network_id: str = None,
  region: str = None,
  status: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None,
  transparent_vlan: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#description DataOpenstackNetworkingNetworkV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.external">external</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#external DataOpenstackNetworkingNetworkV2#external}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#id DataOpenstackNetworkingNetworkV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.matchingSubnetCidr">matching_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#matching_subnet_cidr DataOpenstackNetworkingNetworkV2#matching_subnet_cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#mtu DataOpenstackNetworkingNetworkV2#mtu}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#name DataOpenstackNetworkingNetworkV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#network_id DataOpenstackNetworkingNetworkV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#region DataOpenstackNetworkingNetworkV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#status DataOpenstackNetworkingNetworkV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tags DataOpenstackNetworkingNetworkV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.transparentVlan">transparent_vlan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#transparent_vlan DataOpenstackNetworkingNetworkV2#transparent_vlan}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#description DataOpenstackNetworkingNetworkV2#description}.

---

##### `external`<sup>Optional</sup> <a name="external" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.external"></a>

```python
external: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#external DataOpenstackNetworkingNetworkV2#external}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#id DataOpenstackNetworkingNetworkV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matching_subnet_cidr`<sup>Optional</sup> <a name="matching_subnet_cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.matchingSubnetCidr"></a>

```python
matching_subnet_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#matching_subnet_cidr DataOpenstackNetworkingNetworkV2#matching_subnet_cidr}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#mtu DataOpenstackNetworkingNetworkV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#name DataOpenstackNetworkingNetworkV2#name}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#network_id DataOpenstackNetworkingNetworkV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#region DataOpenstackNetworkingNetworkV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#status DataOpenstackNetworkingNetworkV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tags DataOpenstackNetworkingNetworkV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tenant_id DataOpenstackNetworkingNetworkV2#tenant_id}

---

##### `transparent_vlan`<sup>Optional</sup> <a name="transparent_vlan" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.transparentVlan"></a>

```python
transparent_vlan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#transparent_vlan DataOpenstackNetworkingNetworkV2#transparent_vlan}.

---

### DataOpenstackNetworkingNetworkV2Segments <a name="DataOpenstackNetworkingNetworkV2Segments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackNetworkingNetworkV2SegmentsList <a name="DataOpenstackNetworkingNetworkV2SegmentsList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackNetworkingNetworkV2SegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackNetworkingNetworkV2SegmentsOutputReference <a name="DataOpenstackNetworkingNetworkV2SegmentsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_network_v2

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.physicalNetwork">physical_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.segmentationId">segmentation_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments">DataOpenstackNetworkingNetworkV2Segments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `physical_network`<sup>Required</sup> <a name="physical_network" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.physicalNetwork"></a>

```python
physical_network: str
```

- *Type:* str

---

##### `segmentation_id`<sup>Required</sup> <a name="segmentation_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.segmentationId"></a>

```python
segmentation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackNetworkingNetworkV2Segments
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments">DataOpenstackNetworkingNetworkV2Segments</a>

---



