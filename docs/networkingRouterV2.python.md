# `networkingRouterV2` Submodule <a name="`networkingRouterV2` Submodule" id="@ithings/cdktf-provider-openstack.networkingRouterV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingRouterV2 <a name="NetworkingRouterV2" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2 openstack_networking_router_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2(
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
  availability_zone_hints: typing.List[str] = None,
  description: str = None,
  distributed: typing.Union[bool, IResolvable] = None,
  enable_snat: typing.Union[bool, IResolvable] = None,
  external_fixed_ip: typing.Union[IResolvable, typing.List[NetworkingRouterV2ExternalFixedIp]] = None,
  external_gateway: str = None,
  external_network_id: str = None,
  external_subnet_ids: typing.List[str] = None,
  id: str = None,
  name: str = None,
  region: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None,
  timeouts: NetworkingRouterV2Timeouts = None,
  value_specs: typing.Mapping[str] = None,
  vendor_options: NetworkingRouterV2VendorOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#admin_state_up NetworkingRouterV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.availabilityZoneHints">availability_zone_hints</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#availability_zone_hints NetworkingRouterV2#availability_zone_hints}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#description NetworkingRouterV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.distributed">distributed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#distributed NetworkingRouterV2#distributed}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.enableSnat">enable_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#enable_snat NetworkingRouterV2#enable_snat}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalFixedIp">external_fixed_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]</code> | external_fixed_ip block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalGateway">external_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_gateway NetworkingRouterV2#external_gateway}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalNetworkId">external_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_network_id NetworkingRouterV2#external_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalSubnetIds">external_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_subnet_ids NetworkingRouterV2#external_subnet_ids}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#id NetworkingRouterV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#name NetworkingRouterV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#region NetworkingRouterV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tags NetworkingRouterV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tenant_id NetworkingRouterV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#value_specs NetworkingRouterV2#value_specs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.vendorOptions">vendor_options</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a></code> | vendor_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#admin_state_up NetworkingRouterV2#admin_state_up}.

---

##### `availability_zone_hints`<sup>Optional</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.availabilityZoneHints"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#availability_zone_hints NetworkingRouterV2#availability_zone_hints}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#description NetworkingRouterV2#description}.

---

##### `distributed`<sup>Optional</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.distributed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#distributed NetworkingRouterV2#distributed}.

---

##### `enable_snat`<sup>Optional</sup> <a name="enable_snat" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.enableSnat"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#enable_snat NetworkingRouterV2#enable_snat}.

---

##### `external_fixed_ip`<sup>Optional</sup> <a name="external_fixed_ip" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalFixedIp"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]

external_fixed_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_fixed_ip NetworkingRouterV2#external_fixed_ip}

---

##### `external_gateway`<sup>Optional</sup> <a name="external_gateway" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalGateway"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_gateway NetworkingRouterV2#external_gateway}.

---

##### `external_network_id`<sup>Optional</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_network_id NetworkingRouterV2#external_network_id}.

---

##### `external_subnet_ids`<sup>Optional</sup> <a name="external_subnet_ids" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.externalSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_subnet_ids NetworkingRouterV2#external_subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#id NetworkingRouterV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#name NetworkingRouterV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#region NetworkingRouterV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tags NetworkingRouterV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tenant_id NetworkingRouterV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#timeouts NetworkingRouterV2#timeouts}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.valueSpecs"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#value_specs NetworkingRouterV2#value_specs}.

---

##### `vendor_options`<sup>Optional</sup> <a name="vendor_options" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.vendorOptions"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

vendor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#vendor_options NetworkingRouterV2#vendor_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putExternalFixedIp">put_external_fixed_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putVendorOptions">put_vendor_options</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAvailabilityZoneHints">reset_availability_zone_hints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDistributed">reset_distributed</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetEnableSnat">reset_enable_snat</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalFixedIp">reset_external_fixed_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalGateway">reset_external_gateway</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalNetworkId">reset_external_network_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalSubnetIds">reset_external_subnet_ids</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetValueSpecs">reset_value_specs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetVendorOptions">reset_vendor_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_fixed_ip` <a name="put_external_fixed_ip" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putExternalFixedIp"></a>

```python
def put_external_fixed_ip(
  value: typing.Union[IResolvable, typing.List[NetworkingRouterV2ExternalFixedIp]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putExternalFixedIp.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#create NetworkingRouterV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#delete NetworkingRouterV2#delete}.

---

##### `put_vendor_options` <a name="put_vendor_options" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putVendorOptions"></a>

```python
def put_vendor_options(
  set_router_gateway_after_create: typing.Union[bool, IResolvable] = None
) -> None
```

###### `set_router_gateway_after_create`<sup>Optional</sup> <a name="set_router_gateway_after_create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putVendorOptions.parameter.setRouterGatewayAfterCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#set_router_gateway_after_create NetworkingRouterV2#set_router_gateway_after_create}.

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_availability_zone_hints` <a name="reset_availability_zone_hints" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAvailabilityZoneHints"></a>

```python
def reset_availability_zone_hints() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_distributed` <a name="reset_distributed" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDistributed"></a>

```python
def reset_distributed() -> None
```

##### `reset_enable_snat` <a name="reset_enable_snat" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetEnableSnat"></a>

```python
def reset_enable_snat() -> None
```

##### `reset_external_fixed_ip` <a name="reset_external_fixed_ip" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalFixedIp"></a>

```python
def reset_external_fixed_ip() -> None
```

##### `reset_external_gateway` <a name="reset_external_gateway" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalGateway"></a>

```python
def reset_external_gateway() -> None
```

##### `reset_external_network_id` <a name="reset_external_network_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalNetworkId"></a>

```python
def reset_external_network_id() -> None
```

##### `reset_external_subnet_ids` <a name="reset_external_subnet_ids" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalSubnetIds"></a>

```python
def reset_external_subnet_ids() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_value_specs` <a name="reset_value_specs" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetValueSpecs"></a>

```python
def reset_value_specs() -> None
```

##### `reset_vendor_options` <a name="reset_vendor_options" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetVendorOptions"></a>

```python
def reset_vendor_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkingRouterV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkingRouterV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkingRouterV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkingRouterV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingRouterV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.allTags">all_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIp">external_fixed_ip</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList">NetworkingRouterV2ExternalFixedIpList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference">NetworkingRouterV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptions">vendor_options</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference">NetworkingRouterV2VendorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHintsInput">availability_zone_hints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributedInput">distributed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnatInput">enable_snat_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIpInput">external_fixed_ip_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGatewayInput">external_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkIdInput">external_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIdsInput">external_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecsInput">value_specs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptionsInput">vendor_options_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHints">availability_zone_hints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributed">distributed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnat">enable_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGateway">external_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkId">external_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIds">external_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_tags`<sup>Required</sup> <a name="all_tags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.allTags"></a>

```python
all_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_fixed_ip`<sup>Required</sup> <a name="external_fixed_ip" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIp"></a>

```python
external_fixed_ip: NetworkingRouterV2ExternalFixedIpList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList">NetworkingRouterV2ExternalFixedIpList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeouts"></a>

```python
timeouts: NetworkingRouterV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference">NetworkingRouterV2TimeoutsOutputReference</a>

---

##### `vendor_options`<sup>Required</sup> <a name="vendor_options" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptions"></a>

```python
vendor_options: NetworkingRouterV2VendorOptionsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference">NetworkingRouterV2VendorOptionsOutputReference</a>

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_hints_input`<sup>Optional</sup> <a name="availability_zone_hints_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHintsInput"></a>

```python
availability_zone_hints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distributed_input`<sup>Optional</sup> <a name="distributed_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributedInput"></a>

```python
distributed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_snat_input`<sup>Optional</sup> <a name="enable_snat_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnatInput"></a>

```python
enable_snat_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_fixed_ip_input`<sup>Optional</sup> <a name="external_fixed_ip_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIpInput"></a>

```python
external_fixed_ip_input: typing.Union[IResolvable, typing.List[NetworkingRouterV2ExternalFixedIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]

---

##### `external_gateway_input`<sup>Optional</sup> <a name="external_gateway_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGatewayInput"></a>

```python
external_gateway_input: str
```

- *Type:* str

---

##### `external_network_id_input`<sup>Optional</sup> <a name="external_network_id_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkIdInput"></a>

```python
external_network_id_input: str
```

- *Type:* str

---

##### `external_subnet_ids_input`<sup>Optional</sup> <a name="external_subnet_ids_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIdsInput"></a>

```python
external_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkingRouterV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>]

---

##### `value_specs_input`<sup>Optional</sup> <a name="value_specs_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecsInput"></a>

```python
value_specs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vendor_options_input`<sup>Optional</sup> <a name="vendor_options_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptionsInput"></a>

```python
vendor_options_input: NetworkingRouterV2VendorOptions
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_hints`<sup>Required</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHints"></a>

```python
availability_zone_hints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distributed`<sup>Required</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributed"></a>

```python
distributed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_snat`<sup>Required</sup> <a name="enable_snat" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnat"></a>

```python
enable_snat: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_gateway`<sup>Required</sup> <a name="external_gateway" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGateway"></a>

```python
external_gateway: str
```

- *Type:* str

---

##### `external_network_id`<sup>Required</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkId"></a>

```python
external_network_id: str
```

- *Type:* str

---

##### `external_subnet_ids`<sup>Required</sup> <a name="external_subnet_ids" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIds"></a>

```python
external_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `value_specs`<sup>Required</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingRouterV2Config <a name="NetworkingRouterV2Config" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  availability_zone_hints: typing.List[str] = None,
  description: str = None,
  distributed: typing.Union[bool, IResolvable] = None,
  enable_snat: typing.Union[bool, IResolvable] = None,
  external_fixed_ip: typing.Union[IResolvable, typing.List[NetworkingRouterV2ExternalFixedIp]] = None,
  external_gateway: str = None,
  external_network_id: str = None,
  external_subnet_ids: typing.List[str] = None,
  id: str = None,
  name: str = None,
  region: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None,
  timeouts: NetworkingRouterV2Timeouts = None,
  value_specs: typing.Mapping[str] = None,
  vendor_options: NetworkingRouterV2VendorOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#admin_state_up NetworkingRouterV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.availabilityZoneHints">availability_zone_hints</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#availability_zone_hints NetworkingRouterV2#availability_zone_hints}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#description NetworkingRouterV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.distributed">distributed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#distributed NetworkingRouterV2#distributed}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.enableSnat">enable_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#enable_snat NetworkingRouterV2#enable_snat}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalFixedIp">external_fixed_ip</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]</code> | external_fixed_ip block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalGateway">external_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_gateway NetworkingRouterV2#external_gateway}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalNetworkId">external_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_network_id NetworkingRouterV2#external_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalSubnetIds">external_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_subnet_ids NetworkingRouterV2#external_subnet_ids}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#id NetworkingRouterV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#name NetworkingRouterV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#region NetworkingRouterV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tags NetworkingRouterV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tenant_id NetworkingRouterV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#value_specs NetworkingRouterV2#value_specs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.vendorOptions">vendor_options</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a></code> | vendor_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#admin_state_up NetworkingRouterV2#admin_state_up}.

---

##### `availability_zone_hints`<sup>Optional</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.availabilityZoneHints"></a>

```python
availability_zone_hints: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#availability_zone_hints NetworkingRouterV2#availability_zone_hints}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#description NetworkingRouterV2#description}.

---

##### `distributed`<sup>Optional</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.distributed"></a>

```python
distributed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#distributed NetworkingRouterV2#distributed}.

---

##### `enable_snat`<sup>Optional</sup> <a name="enable_snat" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.enableSnat"></a>

```python
enable_snat: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#enable_snat NetworkingRouterV2#enable_snat}.

---

##### `external_fixed_ip`<sup>Optional</sup> <a name="external_fixed_ip" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalFixedIp"></a>

```python
external_fixed_ip: typing.Union[IResolvable, typing.List[NetworkingRouterV2ExternalFixedIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]

external_fixed_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_fixed_ip NetworkingRouterV2#external_fixed_ip}

---

##### `external_gateway`<sup>Optional</sup> <a name="external_gateway" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalGateway"></a>

```python
external_gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_gateway NetworkingRouterV2#external_gateway}.

---

##### `external_network_id`<sup>Optional</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalNetworkId"></a>

```python
external_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_network_id NetworkingRouterV2#external_network_id}.

---

##### `external_subnet_ids`<sup>Optional</sup> <a name="external_subnet_ids" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalSubnetIds"></a>

```python
external_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_subnet_ids NetworkingRouterV2#external_subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#id NetworkingRouterV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#name NetworkingRouterV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#region NetworkingRouterV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tags NetworkingRouterV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tenant_id NetworkingRouterV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.timeouts"></a>

```python
timeouts: NetworkingRouterV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#timeouts NetworkingRouterV2#timeouts}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#value_specs NetworkingRouterV2#value_specs}.

---

##### `vendor_options`<sup>Optional</sup> <a name="vendor_options" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.vendorOptions"></a>

```python
vendor_options: NetworkingRouterV2VendorOptions
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

vendor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#vendor_options NetworkingRouterV2#vendor_options}

---

### NetworkingRouterV2ExternalFixedIp <a name="NetworkingRouterV2ExternalFixedIp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2ExternalFixedIp(
  ip_address: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#ip_address NetworkingRouterV2#ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#subnet_id NetworkingRouterV2#subnet_id}. |

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#ip_address NetworkingRouterV2#ip_address}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#subnet_id NetworkingRouterV2#subnet_id}.

---

### NetworkingRouterV2Timeouts <a name="NetworkingRouterV2Timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#create NetworkingRouterV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#delete NetworkingRouterV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#create NetworkingRouterV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#delete NetworkingRouterV2#delete}.

---

### NetworkingRouterV2VendorOptions <a name="NetworkingRouterV2VendorOptions" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2VendorOptions(
  set_router_gateway_after_create: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions.property.setRouterGatewayAfterCreate">set_router_gateway_after_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#set_router_gateway_after_create NetworkingRouterV2#set_router_gateway_after_create}. |

---

##### `set_router_gateway_after_create`<sup>Optional</sup> <a name="set_router_gateway_after_create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions.property.setRouterGatewayAfterCreate"></a>

```python
set_router_gateway_after_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#set_router_gateway_after_create NetworkingRouterV2#set_router_gateway_after_create}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingRouterV2ExternalFixedIpList <a name="NetworkingRouterV2ExternalFixedIpList" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2ExternalFixedIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkingRouterV2ExternalFixedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkingRouterV2ExternalFixedIp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]]

---


### NetworkingRouterV2ExternalFixedIpOutputReference <a name="NetworkingRouterV2ExternalFixedIpOutputReference" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address` <a name="reset_ip_address" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkingRouterV2ExternalFixedIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>]

---


### NetworkingRouterV2TimeoutsOutputReference <a name="NetworkingRouterV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkingRouterV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>]

---


### NetworkingRouterV2VendorOptionsOutputReference <a name="NetworkingRouterV2VendorOptionsOutputReference" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import networking_router_v2

networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resetSetRouterGatewayAfterCreate">reset_set_router_gateway_after_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_set_router_gateway_after_create` <a name="reset_set_router_gateway_after_create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resetSetRouterGatewayAfterCreate"></a>

```python
def reset_set_router_gateway_after_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreateInput">set_router_gateway_after_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreate">set_router_gateway_after_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `set_router_gateway_after_create_input`<sup>Optional</sup> <a name="set_router_gateway_after_create_input" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreateInput"></a>

```python
set_router_gateway_after_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_router_gateway_after_create`<sup>Required</sup> <a name="set_router_gateway_after_create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreate"></a>

```python
set_router_gateway_after_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkingRouterV2VendorOptions
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

---



