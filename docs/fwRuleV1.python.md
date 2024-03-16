# `fwRuleV1` Submodule <a name="`fwRuleV1` Submodule" id="@ithings/cdktf-provider-openstack.fwRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FwRuleV1 <a name="FwRuleV1" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1 openstack_fw_rule_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import fw_rule_v1

fwRuleV1.FwRuleV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  protocol: str,
  description: str = None,
  destination_ip_address: str = None,
  destination_port: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_version: typing.Union[int, float] = None,
  name: str = None,
  region: str = None,
  source_ip_address: str = None,
  source_port: str = None,
  tenant_id: str = None,
  value_specs: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#action FwRuleV1#action}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#protocol FwRuleV1#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#description FwRuleV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.destinationIpAddress">destination_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_ip_address FwRuleV1#destination_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.destinationPort">destination_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_port FwRuleV1#destination_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#enabled FwRuleV1#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#id FwRuleV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#ip_version FwRuleV1#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#name FwRuleV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#region FwRuleV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.sourceIpAddress">source_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_ip_address FwRuleV1#source_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.sourcePort">source_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_port FwRuleV1#source_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#tenant_id FwRuleV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#value_specs FwRuleV1#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#action FwRuleV1#action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#protocol FwRuleV1#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#description FwRuleV1#description}.

---

##### `destination_ip_address`<sup>Optional</sup> <a name="destination_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.destinationIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_ip_address FwRuleV1#destination_ip_address}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.destinationPort"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_port FwRuleV1#destination_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#enabled FwRuleV1#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#id FwRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.ipVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#ip_version FwRuleV1#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#name FwRuleV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#region FwRuleV1#region}.

---

##### `source_ip_address`<sup>Optional</sup> <a name="source_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.sourceIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_ip_address FwRuleV1#source_ip_address}.

---

##### `source_port`<sup>Optional</sup> <a name="source_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.sourcePort"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_port FwRuleV1#source_port}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#tenant_id FwRuleV1#tenant_id}.

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.Initializer.parameter.valueSpecs"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#value_specs FwRuleV1#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationIpAddress">reset_destination_ip_address</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationPort">reset_destination_port</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourceIpAddress">reset_source_ip_address</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourcePort">reset_source_port</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetValueSpecs">reset_value_specs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_ip_address` <a name="reset_destination_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationIpAddress"></a>

```python
def reset_destination_ip_address() -> None
```

##### `reset_destination_port` <a name="reset_destination_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetDestinationPort"></a>

```python
def reset_destination_port() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_source_ip_address` <a name="reset_source_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourceIpAddress"></a>

```python
def reset_source_ip_address() -> None
```

##### `reset_source_port` <a name="reset_source_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetSourcePort"></a>

```python
def reset_source_port() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_value_specs` <a name="reset_value_specs" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.resetValueSpecs"></a>

```python
def reset_value_specs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FwRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import fw_rule_v1

fwRuleV1.FwRuleV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import fw_rule_v1

fwRuleV1.FwRuleV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import fw_rule_v1

fwRuleV1.FwRuleV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import fw_rule_v1

fwRuleV1.FwRuleV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FwRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FwRuleV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FwRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FwRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddressInput">destination_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPortInput">destination_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersionInput">ip_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddressInput">source_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePortInput">source_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecsInput">value_specs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddress">destination_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPort">destination_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddress">source_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePort">source_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_ip_address_input`<sup>Optional</sup> <a name="destination_ip_address_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddressInput"></a>

```python
destination_ip_address_input: str
```

- *Type:* str

---

##### `destination_port_input`<sup>Optional</sup> <a name="destination_port_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPortInput"></a>

```python
destination_port_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersionInput"></a>

```python
ip_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_ip_address_input`<sup>Optional</sup> <a name="source_ip_address_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddressInput"></a>

```python
source_ip_address_input: str
```

- *Type:* str

---

##### `source_port_input`<sup>Optional</sup> <a name="source_port_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePortInput"></a>

```python
source_port_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `value_specs_input`<sup>Optional</sup> <a name="value_specs_input" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecsInput"></a>

```python
value_specs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `action`<sup>Required</sup> <a name="action" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_ip_address`<sup>Required</sup> <a name="destination_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationIpAddress"></a>

```python
destination_ip_address: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.destinationPort"></a>

```python
destination_port: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_ip_address`<sup>Required</sup> <a name="source_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourceIpAddress"></a>

```python
source_ip_address: str
```

- *Type:* str

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.sourcePort"></a>

```python
source_port: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `value_specs`<sup>Required</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FwRuleV1Config <a name="FwRuleV1Config" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import fw_rule_v1

fwRuleV1.FwRuleV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  protocol: str,
  description: str = None,
  destination_ip_address: str = None,
  destination_port: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_version: typing.Union[int, float] = None,
  name: str = None,
  region: str = None,
  source_ip_address: str = None,
  source_port: str = None,
  tenant_id: str = None,
  value_specs: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#action FwRuleV1#action}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#protocol FwRuleV1#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#description FwRuleV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationIpAddress">destination_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_ip_address FwRuleV1#destination_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationPort">destination_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_port FwRuleV1#destination_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#enabled FwRuleV1#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#id FwRuleV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#ip_version FwRuleV1#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#name FwRuleV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#region FwRuleV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourceIpAddress">source_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_ip_address FwRuleV1#source_ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourcePort">source_port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_port FwRuleV1#source_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#tenant_id FwRuleV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#value_specs FwRuleV1#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#action FwRuleV1#action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#protocol FwRuleV1#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#description FwRuleV1#description}.

---

##### `destination_ip_address`<sup>Optional</sup> <a name="destination_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationIpAddress"></a>

```python
destination_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_ip_address FwRuleV1#destination_ip_address}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.destinationPort"></a>

```python
destination_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#destination_port FwRuleV1#destination_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#enabled FwRuleV1#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#id FwRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#ip_version FwRuleV1#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#name FwRuleV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#region FwRuleV1#region}.

---

##### `source_ip_address`<sup>Optional</sup> <a name="source_ip_address" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourceIpAddress"></a>

```python
source_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_ip_address FwRuleV1#source_ip_address}.

---

##### `source_port`<sup>Optional</sup> <a name="source_port" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.sourcePort"></a>

```python
source_port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#source_port FwRuleV1#source_port}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#tenant_id FwRuleV1#tenant_id}.

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.fwRuleV1.FwRuleV1Config.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_rule_v1#value_specs FwRuleV1#value_specs}.

---



