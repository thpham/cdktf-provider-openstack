# `networkingQuotaV2` Submodule <a name="`networkingQuotaV2` Submodule" id="@ithings/cdktf-provider-openstack.networkingQuotaV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingQuotaV2 <a name="NetworkingQuotaV2" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2 openstack_networking_quota_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2(
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
  floatingip: typing.Union[int, float] = None,
  id: str = None,
  network: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  rbac_policy: typing.Union[int, float] = None,
  region: str = None,
  router: typing.Union[int, float] = None,
  security_group: typing.Union[int, float] = None,
  security_group_rule: typing.Union[int, float] = None,
  subnet: typing.Union[int, float] = None,
  subnetpool: typing.Union[int, float] = None,
  timeouts: NetworkingQuotaV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#project_id NetworkingQuotaV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.floatingip">floatingip</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#floatingip NetworkingQuotaV2#floatingip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#id NetworkingQuotaV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.network">network</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#network NetworkingQuotaV2#network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#port NetworkingQuotaV2#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.rbacPolicy">rbac_policy</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#rbac_policy NetworkingQuotaV2#rbac_policy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#region NetworkingQuotaV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.router">router</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#router NetworkingQuotaV2#router}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.securityGroup">security_group</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group NetworkingQuotaV2#security_group}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.securityGroupRule">security_group_rule</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group_rule NetworkingQuotaV2#security_group_rule}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.subnet">subnet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnet NetworkingQuotaV2#subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.subnetpool">subnetpool</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnetpool NetworkingQuotaV2#subnetpool}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#project_id NetworkingQuotaV2#project_id}.

---

##### `floatingip`<sup>Optional</sup> <a name="floatingip" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.floatingip"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#floatingip NetworkingQuotaV2#floatingip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#id NetworkingQuotaV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.network"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#network NetworkingQuotaV2#network}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#port NetworkingQuotaV2#port}.

---

##### `rbac_policy`<sup>Optional</sup> <a name="rbac_policy" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.rbacPolicy"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#rbac_policy NetworkingQuotaV2#rbac_policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#region NetworkingQuotaV2#region}.

---

##### `router`<sup>Optional</sup> <a name="router" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.router"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#router NetworkingQuotaV2#router}.

---

##### `security_group`<sup>Optional</sup> <a name="security_group" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.securityGroup"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group NetworkingQuotaV2#security_group}.

---

##### `security_group_rule`<sup>Optional</sup> <a name="security_group_rule" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.securityGroupRule"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group_rule NetworkingQuotaV2#security_group_rule}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.subnet"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnet NetworkingQuotaV2#subnet}.

---

##### `subnetpool`<sup>Optional</sup> <a name="subnetpool" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.subnetpool"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnetpool NetworkingQuotaV2#subnetpool}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#timeouts NetworkingQuotaV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetFloatingip">reset_floatingip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetRbacPolicy">reset_rbac_policy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetRouter">reset_router</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSecurityGroup">reset_security_group</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSecurityGroupRule">reset_security_group_rule</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSubnetpool">reset_subnetpool</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#create NetworkingQuotaV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#delete NetworkingQuotaV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#update NetworkingQuotaV2#update}.

---

##### `reset_floatingip` <a name="reset_floatingip" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetFloatingip"></a>

```python
def reset_floatingip() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network` <a name="reset_network" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_port` <a name="reset_port" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_rbac_policy` <a name="reset_rbac_policy" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetRbacPolicy"></a>

```python
def reset_rbac_policy() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_router` <a name="reset_router" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetRouter"></a>

```python
def reset_router() -> None
```

##### `reset_security_group` <a name="reset_security_group" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSecurityGroup"></a>

```python
def reset_security_group() -> None
```

##### `reset_security_group_rule` <a name="reset_security_group_rule" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSecurityGroupRule"></a>

```python
def reset_security_group_rule() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_subnetpool` <a name="reset_subnetpool" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetSubnetpool"></a>

```python
def reset_subnetpool() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkingQuotaV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkingQuotaV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkingQuotaV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkingQuotaV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingQuotaV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference">NetworkingQuotaV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.floatingipInput">floatingip_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.networkInput">network_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.rbacPolicyInput">rbac_policy_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.routerInput">router_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroupInput">security_group_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroupRuleInput">security_group_rule_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnetInput">subnet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnetpoolInput">subnetpool_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.floatingip">floatingip</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.network">network</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.rbacPolicy">rbac_policy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.router">router</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroup">security_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroupRule">security_group_rule</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnet">subnet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnetpool">subnetpool</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.timeouts"></a>

```python
timeouts: NetworkingQuotaV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference">NetworkingQuotaV2TimeoutsOutputReference</a>

---

##### `floatingip_input`<sup>Optional</sup> <a name="floatingip_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.floatingipInput"></a>

```python
floatingip_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.networkInput"></a>

```python
network_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `rbac_policy_input`<sup>Optional</sup> <a name="rbac_policy_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.rbacPolicyInput"></a>

```python
rbac_policy_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.routerInput"></a>

```python
router_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_input`<sup>Optional</sup> <a name="security_group_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroupInput"></a>

```python
security_group_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_rule_input`<sup>Optional</sup> <a name="security_group_rule_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroupRuleInput"></a>

```python
security_group_rule_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnetInput"></a>

```python
subnet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetpool_input`<sup>Optional</sup> <a name="subnetpool_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnetpoolInput"></a>

```python
subnetpool_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkingQuotaV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a>]

---

##### `floatingip`<sup>Required</sup> <a name="floatingip" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.floatingip"></a>

```python
floatingip: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.network"></a>

```python
network: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `rbac_policy`<sup>Required</sup> <a name="rbac_policy" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.rbacPolicy"></a>

```python
rbac_policy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.router"></a>

```python
router: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group`<sup>Required</sup> <a name="security_group" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroup"></a>

```python
security_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_group_rule`<sup>Required</sup> <a name="security_group_rule" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.securityGroupRule"></a>

```python
security_group_rule: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnet"></a>

```python
subnet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetpool`<sup>Required</sup> <a name="subnetpool" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.subnetpool"></a>

```python
subnetpool: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingQuotaV2Config <a name="NetworkingQuotaV2Config" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  floatingip: typing.Union[int, float] = None,
  id: str = None,
  network: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  rbac_policy: typing.Union[int, float] = None,
  region: str = None,
  router: typing.Union[int, float] = None,
  security_group: typing.Union[int, float] = None,
  security_group_rule: typing.Union[int, float] = None,
  subnet: typing.Union[int, float] = None,
  subnetpool: typing.Union[int, float] = None,
  timeouts: NetworkingQuotaV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#project_id NetworkingQuotaV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.floatingip">floatingip</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#floatingip NetworkingQuotaV2#floatingip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#id NetworkingQuotaV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.network">network</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#network NetworkingQuotaV2#network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#port NetworkingQuotaV2#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.rbacPolicy">rbac_policy</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#rbac_policy NetworkingQuotaV2#rbac_policy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#region NetworkingQuotaV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.router">router</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#router NetworkingQuotaV2#router}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.securityGroup">security_group</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group NetworkingQuotaV2#security_group}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.securityGroupRule">security_group_rule</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group_rule NetworkingQuotaV2#security_group_rule}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.subnet">subnet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnet NetworkingQuotaV2#subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.subnetpool">subnetpool</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnetpool NetworkingQuotaV2#subnetpool}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#project_id NetworkingQuotaV2#project_id}.

---

##### `floatingip`<sup>Optional</sup> <a name="floatingip" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.floatingip"></a>

```python
floatingip: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#floatingip NetworkingQuotaV2#floatingip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#id NetworkingQuotaV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.network"></a>

```python
network: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#network NetworkingQuotaV2#network}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#port NetworkingQuotaV2#port}.

---

##### `rbac_policy`<sup>Optional</sup> <a name="rbac_policy" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.rbacPolicy"></a>

```python
rbac_policy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#rbac_policy NetworkingQuotaV2#rbac_policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#region NetworkingQuotaV2#region}.

---

##### `router`<sup>Optional</sup> <a name="router" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.router"></a>

```python
router: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#router NetworkingQuotaV2#router}.

---

##### `security_group`<sup>Optional</sup> <a name="security_group" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.securityGroup"></a>

```python
security_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group NetworkingQuotaV2#security_group}.

---

##### `security_group_rule`<sup>Optional</sup> <a name="security_group_rule" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.securityGroupRule"></a>

```python
security_group_rule: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#security_group_rule NetworkingQuotaV2#security_group_rule}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.subnet"></a>

```python
subnet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnet NetworkingQuotaV2#subnet}.

---

##### `subnetpool`<sup>Optional</sup> <a name="subnetpool" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.subnetpool"></a>

```python
subnetpool: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#subnetpool NetworkingQuotaV2#subnetpool}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Config.property.timeouts"></a>

```python
timeouts: NetworkingQuotaV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#timeouts NetworkingQuotaV2#timeouts}

---

### NetworkingQuotaV2Timeouts <a name="NetworkingQuotaV2Timeouts" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#create NetworkingQuotaV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#delete NetworkingQuotaV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#update NetworkingQuotaV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#create NetworkingQuotaV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#delete NetworkingQuotaV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_quota_v2#update NetworkingQuotaV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingQuotaV2TimeoutsOutputReference <a name="NetworkingQuotaV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_quota_v2

networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkingQuotaV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingQuotaV2.NetworkingQuotaV2Timeouts">NetworkingQuotaV2Timeouts</a>]

---



