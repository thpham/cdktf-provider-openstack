# `lbVipV1` Submodule <a name="`lbVipV1` Submodule" id="@ithings/cdktf-provider-openstack.lbVipV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbVipV1 <a name="LbVipV1" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1 openstack_lb_vip_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1(
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
  pool_id: str,
  port: typing.Union[int, float],
  protocol: str,
  subnet_id: str,
  address: str = None,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  conn_limit: typing.Union[int, float] = None,
  description: str = None,
  floating_ip: str = None,
  id: str = None,
  persistence: typing.Mapping[str] = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: LbVipV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#name LbVipV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#pool_id LbVipV1#pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#port LbVipV1#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#protocol LbVipV1#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#subnet_id LbVipV1#subnet_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#address LbVipV1#address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#admin_state_up LbVipV1#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.connLimit">conn_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#conn_limit LbVipV1#conn_limit}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#description LbVipV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.floatingIp">floating_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#floating_ip LbVipV1#floating_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#id LbVipV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.persistence">persistence</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#persistence LbVipV1#persistence}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#region LbVipV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#tenant_id LbVipV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#name LbVipV1#name}.

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.poolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#pool_id LbVipV1#pool_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#port LbVipV1#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#protocol LbVipV1#protocol}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#subnet_id LbVipV1#subnet_id}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#address LbVipV1#address}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#admin_state_up LbVipV1#admin_state_up}.

---

##### `conn_limit`<sup>Optional</sup> <a name="conn_limit" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.connLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#conn_limit LbVipV1#conn_limit}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#description LbVipV1#description}.

---

##### `floating_ip`<sup>Optional</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.floatingIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#floating_ip LbVipV1#floating_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#id LbVipV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.persistence"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#persistence LbVipV1#persistence}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#region LbVipV1#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#tenant_id LbVipV1#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#timeouts LbVipV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetConnLimit">reset_conn_limit</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetFloatingIp">reset_floating_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetPersistence">reset_persistence</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#create LbVipV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#delete LbVipV1#delete}.

---

##### `reset_address` <a name="reset_address" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_conn_limit` <a name="reset_conn_limit" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetConnLimit"></a>

```python
def reset_conn_limit() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_floating_ip` <a name="reset_floating_ip" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetFloatingIp"></a>

```python
def reset_floating_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_persistence` <a name="reset_persistence" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetPersistence"></a>

```python
def reset_persistence() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbVipV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbVipV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbVipV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbVipV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbVipV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.portId">port_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference">LbVipV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.connLimitInput">conn_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.floatingIpInput">floating_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.persistenceInput">persistence_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.connLimit">conn_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.floatingIp">floating_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.persistence">persistence</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `port_id`<sup>Required</sup> <a name="port_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.portId"></a>

```python
port_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.timeouts"></a>

```python
timeouts: LbVipV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference">LbVipV1TimeoutsOutputReference</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conn_limit_input`<sup>Optional</sup> <a name="conn_limit_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.connLimitInput"></a>

```python
conn_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `floating_ip_input`<sup>Optional</sup> <a name="floating_ip_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.floatingIpInput"></a>

```python
floating_ip_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `persistence_input`<sup>Optional</sup> <a name="persistence_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.persistenceInput"></a>

```python
persistence_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbVipV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a>]

---

##### `address`<sup>Required</sup> <a name="address" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conn_limit`<sup>Required</sup> <a name="conn_limit" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.connLimit"></a>

```python
conn_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `floating_ip`<sup>Required</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.floatingIp"></a>

```python
floating_ip: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `persistence`<sup>Required</sup> <a name="persistence" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.persistence"></a>

```python
persistence: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbVipV1Config <a name="LbVipV1Config" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  pool_id: str,
  port: typing.Union[int, float],
  protocol: str,
  subnet_id: str,
  address: str = None,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  conn_limit: typing.Union[int, float] = None,
  description: str = None,
  floating_ip: str = None,
  id: str = None,
  persistence: typing.Mapping[str] = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: LbVipV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#name LbVipV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#pool_id LbVipV1#pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#port LbVipV1#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#protocol LbVipV1#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#subnet_id LbVipV1#subnet_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#address LbVipV1#address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#admin_state_up LbVipV1#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.connLimit">conn_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#conn_limit LbVipV1#conn_limit}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#description LbVipV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.floatingIp">floating_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#floating_ip LbVipV1#floating_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#id LbVipV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.persistence">persistence</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#persistence LbVipV1#persistence}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#region LbVipV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#tenant_id LbVipV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#name LbVipV1#name}.

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#pool_id LbVipV1#pool_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#port LbVipV1#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#protocol LbVipV1#protocol}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#subnet_id LbVipV1#subnet_id}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#address LbVipV1#address}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#admin_state_up LbVipV1#admin_state_up}.

---

##### `conn_limit`<sup>Optional</sup> <a name="conn_limit" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.connLimit"></a>

```python
conn_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#conn_limit LbVipV1#conn_limit}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#description LbVipV1#description}.

---

##### `floating_ip`<sup>Optional</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.floatingIp"></a>

```python
floating_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#floating_ip LbVipV1#floating_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#id LbVipV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.persistence"></a>

```python
persistence: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#persistence LbVipV1#persistence}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#region LbVipV1#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#tenant_id LbVipV1#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Config.property.timeouts"></a>

```python
timeouts: LbVipV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#timeouts LbVipV1#timeouts}

---

### LbVipV1Timeouts <a name="LbVipV1Timeouts" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#create LbVipV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#delete LbVipV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#create LbVipV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_vip_v1#delete LbVipV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbVipV1TimeoutsOutputReference <a name="LbVipV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_vip_v1

lbVipV1.LbVipV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbVipV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbVipV1.LbVipV1Timeouts">LbVipV1Timeouts</a>]

---



