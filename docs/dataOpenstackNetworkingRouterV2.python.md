# `dataOpenstackNetworkingRouterV2` Submodule <a name="`dataOpenstackNetworkingRouterV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingRouterV2 <a name="DataOpenstackNetworkingRouterV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2 openstack_networking_router_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  description: str = None,
  distributed: typing.Union[bool, IResolvable] = None,
  enable_snat: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name: str = None,
  region: str = None,
  router_id: str = None,
  status: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#admin_state_up DataOpenstackNetworkingRouterV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#description DataOpenstackNetworkingRouterV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.distributed">distributed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#distributed DataOpenstackNetworkingRouterV2#distributed}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.enableSnat">enable_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#enable_snat DataOpenstackNetworkingRouterV2#enable_snat}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#id DataOpenstackNetworkingRouterV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#name DataOpenstackNetworkingRouterV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#region DataOpenstackNetworkingRouterV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#router_id DataOpenstackNetworkingRouterV2#router_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#status DataOpenstackNetworkingRouterV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tags DataOpenstackNetworkingRouterV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tenant_id DataOpenstackNetworkingRouterV2#tenant_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#admin_state_up DataOpenstackNetworkingRouterV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#description DataOpenstackNetworkingRouterV2#description}.

---

##### `distributed`<sup>Optional</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.distributed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#distributed DataOpenstackNetworkingRouterV2#distributed}.

---

##### `enable_snat`<sup>Optional</sup> <a name="enable_snat" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.enableSnat"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#enable_snat DataOpenstackNetworkingRouterV2#enable_snat}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#id DataOpenstackNetworkingRouterV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#name DataOpenstackNetworkingRouterV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#region DataOpenstackNetworkingRouterV2#region}.

---

##### `router_id`<sup>Optional</sup> <a name="router_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.routerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#router_id DataOpenstackNetworkingRouterV2#router_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#status DataOpenstackNetworkingRouterV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tags DataOpenstackNetworkingRouterV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tenant_id DataOpenstackNetworkingRouterV2#tenant_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetDistributed">reset_distributed</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetEnableSnat">reset_enable_snat</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetRouterId">reset_router_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_distributed` <a name="reset_distributed" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetDistributed"></a>

```python
def reset_distributed() -> None
```

##### `reset_enable_snat` <a name="reset_enable_snat" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetEnableSnat"></a>

```python
def reset_enable_snat() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_router_id` <a name="reset_router_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetRouterId"></a>

```python
def reset_router_id() -> None
```

##### `reset_status` <a name="reset_status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingRouterV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackNetworkingRouterV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackNetworkingRouterV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackNetworkingRouterV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingRouterV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.allTags">all_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.availabilityZoneHints">availability_zone_hints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.externalFixedIp">external_fixed_ip</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList">DataOpenstackNetworkingRouterV2ExternalFixedIpList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.externalNetworkId">external_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.distributedInput">distributed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.enableSnatInput">enable_snat_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.routerIdInput">router_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.distributed">distributed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.enableSnat">enable_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.routerId">router_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `all_tags`<sup>Required</sup> <a name="all_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.allTags"></a>

```python
all_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone_hints`<sup>Required</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.availabilityZoneHints"></a>

```python
availability_zone_hints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_fixed_ip`<sup>Required</sup> <a name="external_fixed_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.externalFixedIp"></a>

```python
external_fixed_ip: DataOpenstackNetworkingRouterV2ExternalFixedIpList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList">DataOpenstackNetworkingRouterV2ExternalFixedIpList</a>

---

##### `external_network_id`<sup>Required</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.externalNetworkId"></a>

```python
external_network_id: str
```

- *Type:* str

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distributed_input`<sup>Optional</sup> <a name="distributed_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.distributedInput"></a>

```python
distributed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_snat_input`<sup>Optional</sup> <a name="enable_snat_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.enableSnatInput"></a>

```python
enable_snat_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_id_input`<sup>Optional</sup> <a name="router_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.routerIdInput"></a>

```python
router_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distributed`<sup>Required</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.distributed"></a>

```python
distributed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_snat`<sup>Required</sup> <a name="enable_snat" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.enableSnat"></a>

```python
enable_snat: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingRouterV2Config <a name="DataOpenstackNetworkingRouterV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  description: str = None,
  distributed: typing.Union[bool, IResolvable] = None,
  enable_snat: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name: str = None,
  region: str = None,
  router_id: str = None,
  status: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#admin_state_up DataOpenstackNetworkingRouterV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#description DataOpenstackNetworkingRouterV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.distributed">distributed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#distributed DataOpenstackNetworkingRouterV2#distributed}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.enableSnat">enable_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#enable_snat DataOpenstackNetworkingRouterV2#enable_snat}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#id DataOpenstackNetworkingRouterV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#name DataOpenstackNetworkingRouterV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#region DataOpenstackNetworkingRouterV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#router_id DataOpenstackNetworkingRouterV2#router_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#status DataOpenstackNetworkingRouterV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tags DataOpenstackNetworkingRouterV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tenant_id DataOpenstackNetworkingRouterV2#tenant_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#admin_state_up DataOpenstackNetworkingRouterV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#description DataOpenstackNetworkingRouterV2#description}.

---

##### `distributed`<sup>Optional</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.distributed"></a>

```python
distributed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#distributed DataOpenstackNetworkingRouterV2#distributed}.

---

##### `enable_snat`<sup>Optional</sup> <a name="enable_snat" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.enableSnat"></a>

```python
enable_snat: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#enable_snat DataOpenstackNetworkingRouterV2#enable_snat}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#id DataOpenstackNetworkingRouterV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#name DataOpenstackNetworkingRouterV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#region DataOpenstackNetworkingRouterV2#region}.

---

##### `router_id`<sup>Optional</sup> <a name="router_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#router_id DataOpenstackNetworkingRouterV2#router_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#status DataOpenstackNetworkingRouterV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tags DataOpenstackNetworkingRouterV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_router_v2#tenant_id DataOpenstackNetworkingRouterV2#tenant_id}.

---

### DataOpenstackNetworkingRouterV2ExternalFixedIp <a name="DataOpenstackNetworkingRouterV2ExternalFixedIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIp"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIp.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIp()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackNetworkingRouterV2ExternalFixedIpList <a name="DataOpenstackNetworkingRouterV2ExternalFixedIpList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference <a name="DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_router_v2

dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIp">DataOpenstackNetworkingRouterV2ExternalFixedIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIpOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackNetworkingRouterV2ExternalFixedIp
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingRouterV2.DataOpenstackNetworkingRouterV2ExternalFixedIp">DataOpenstackNetworkingRouterV2ExternalFixedIp</a>

---



