# `dataOpenstackNetworkingSubnetV2` Submodule <a name="`dataOpenstackNetworkingSubnetV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingSubnetV2 <a name="DataOpenstackNetworkingSubnetV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2 openstack_networking_subnet_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cidr: str = None,
  description: str = None,
  dhcp_disabled: typing.Union[bool, IResolvable] = None,
  dhcp_enabled: typing.Union[bool, IResolvable] = None,
  gateway_ip: str = None,
  id: str = None,
  ipv6_address_mode: str = None,
  ipv6_ra_mode: str = None,
  ip_version: typing.Union[int, float] = None,
  name: str = None,
  network_id: str = None,
  region: str = None,
  subnet_id: str = None,
  subnetpool_id: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#cidr DataOpenstackNetworkingSubnetV2#cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#description DataOpenstackNetworkingSubnetV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.dhcpDisabled">dhcp_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_disabled DataOpenstackNetworkingSubnetV2#dhcp_disabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.dhcpEnabled">dhcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_enabled DataOpenstackNetworkingSubnetV2#dhcp_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#gateway_ip DataOpenstackNetworkingSubnetV2#gateway_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#id DataOpenstackNetworkingSubnetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.ipv6AddressMode">ipv6_address_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_address_mode DataOpenstackNetworkingSubnetV2#ipv6_address_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.ipv6RaMode">ipv6_ra_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetV2#ipv6_ra_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ip_version DataOpenstackNetworkingSubnetV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#name DataOpenstackNetworkingSubnetV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#network_id DataOpenstackNetworkingSubnetV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#region DataOpenstackNetworkingSubnetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnet_id DataOpenstackNetworkingSubnetV2#subnet_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.subnetpoolId">subnetpool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnetpool_id DataOpenstackNetworkingSubnetV2#subnetpool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tags DataOpenstackNetworkingSubnetV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#cidr DataOpenstackNetworkingSubnetV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#description DataOpenstackNetworkingSubnetV2#description}.

---

##### `dhcp_disabled`<sup>Optional</sup> <a name="dhcp_disabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.dhcpDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_disabled DataOpenstackNetworkingSubnetV2#dhcp_disabled}.

---

##### `dhcp_enabled`<sup>Optional</sup> <a name="dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.dhcpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_enabled DataOpenstackNetworkingSubnetV2#dhcp_enabled}.

---

##### `gateway_ip`<sup>Optional</sup> <a name="gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.gatewayIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#gateway_ip DataOpenstackNetworkingSubnetV2#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#id DataOpenstackNetworkingSubnetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_address_mode`<sup>Optional</sup> <a name="ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.ipv6AddressMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_address_mode DataOpenstackNetworkingSubnetV2#ipv6_address_mode}.

---

##### `ipv6_ra_mode`<sup>Optional</sup> <a name="ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.ipv6RaMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetV2#ipv6_ra_mode}.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.ipVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ip_version DataOpenstackNetworkingSubnetV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#name DataOpenstackNetworkingSubnetV2#name}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#network_id DataOpenstackNetworkingSubnetV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#region DataOpenstackNetworkingSubnetV2#region}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnet_id DataOpenstackNetworkingSubnetV2#subnet_id}.

---

##### `subnetpool_id`<sup>Optional</sup> <a name="subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.subnetpoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnetpool_id DataOpenstackNetworkingSubnetV2#subnetpool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tags DataOpenstackNetworkingSubnetV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.tenantId"></a>

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tenant_id DataOpenstackNetworkingSubnetV2#tenant_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpDisabled">reset_dhcp_disabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpEnabled">reset_dhcp_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetGatewayIp">reset_gateway_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6AddressMode">reset_ipv6_address_mode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6RaMode">reset_ipv6_ra_mode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetpoolId">reset_subnetpool_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cidr` <a name="reset_cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dhcp_disabled` <a name="reset_dhcp_disabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpDisabled"></a>

```python
def reset_dhcp_disabled() -> None
```

##### `reset_dhcp_enabled` <a name="reset_dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpEnabled"></a>

```python
def reset_dhcp_enabled() -> None
```

##### `reset_gateway_ip` <a name="reset_gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetGatewayIp"></a>

```python
def reset_gateway_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_address_mode` <a name="reset_ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6AddressMode"></a>

```python
def reset_ipv6_address_mode() -> None
```

##### `reset_ipv6_ra_mode` <a name="reset_ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6RaMode"></a>

```python
def reset_ipv6_ra_mode() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_subnetpool_id` <a name="reset_subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetpoolId"></a>

```python
def reset_subnetpool_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingSubnetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackNetworkingSubnetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackNetworkingSubnetV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackNetworkingSubnetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingSubnetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allocationPools">allocation_pools</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList">DataOpenstackNetworkingSubnetV2AllocationPoolsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allTags">all_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dnsNameservers">dns_nameservers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.enableDhcp">enable_dhcp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.hostRoutes">host_routes</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList">DataOpenstackNetworkingSubnetV2HostRoutesList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.serviceTypes">service_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabledInput">dhcp_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabledInput">dhcp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIpInput">gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressModeInput">ipv6_address_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaModeInput">ipv6_ra_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersionInput">ip_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolIdInput">subnetpool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabled">dhcp_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabled">dhcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressMode">ipv6_address_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaMode">ipv6_ra_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolId">subnetpool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allocation_pools`<sup>Required</sup> <a name="allocation_pools" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allocationPools"></a>

```python
allocation_pools: DataOpenstackNetworkingSubnetV2AllocationPoolsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList">DataOpenstackNetworkingSubnetV2AllocationPoolsList</a>

---

##### `all_tags`<sup>Required</sup> <a name="all_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allTags"></a>

```python
all_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_nameservers`<sup>Required</sup> <a name="dns_nameservers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dnsNameservers"></a>

```python
dns_nameservers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_dhcp`<sup>Required</sup> <a name="enable_dhcp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.enableDhcp"></a>

```python
enable_dhcp: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `host_routes`<sup>Required</sup> <a name="host_routes" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.hostRoutes"></a>

```python
host_routes: DataOpenstackNetworkingSubnetV2HostRoutesList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList">DataOpenstackNetworkingSubnetV2HostRoutesList</a>

---

##### `service_types`<sup>Required</sup> <a name="service_types" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.serviceTypes"></a>

```python
service_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dhcp_disabled_input`<sup>Optional</sup> <a name="dhcp_disabled_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabledInput"></a>

```python
dhcp_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcp_enabled_input`<sup>Optional</sup> <a name="dhcp_enabled_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabledInput"></a>

```python
dhcp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_ip_input`<sup>Optional</sup> <a name="gateway_ip_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIpInput"></a>

```python
gateway_ip_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_address_mode_input`<sup>Optional</sup> <a name="ipv6_address_mode_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressModeInput"></a>

```python
ipv6_address_mode_input: str
```

- *Type:* str

---

##### `ipv6_ra_mode_input`<sup>Optional</sup> <a name="ipv6_ra_mode_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaModeInput"></a>

```python
ipv6_ra_mode_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersionInput"></a>

```python
ip_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnetpool_id_input`<sup>Optional</sup> <a name="subnetpool_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolIdInput"></a>

```python
subnetpool_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dhcp_disabled`<sup>Required</sup> <a name="dhcp_disabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabled"></a>

```python
dhcp_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dhcp_enabled`<sup>Required</sup> <a name="dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabled"></a>

```python
dhcp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_address_mode`<sup>Required</sup> <a name="ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressMode"></a>

```python
ipv6_address_mode: str
```

- *Type:* str

---

##### `ipv6_ra_mode`<sup>Required</sup> <a name="ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaMode"></a>

```python
ipv6_ra_mode: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnetpool_id`<sup>Required</sup> <a name="subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolId"></a>

```python
subnetpool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingSubnetV2AllocationPools <a name="DataOpenstackNetworkingSubnetV2AllocationPools" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools()
```


### DataOpenstackNetworkingSubnetV2Config <a name="DataOpenstackNetworkingSubnetV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cidr: str = None,
  description: str = None,
  dhcp_disabled: typing.Union[bool, IResolvable] = None,
  dhcp_enabled: typing.Union[bool, IResolvable] = None,
  gateway_ip: str = None,
  id: str = None,
  ipv6_address_mode: str = None,
  ipv6_ra_mode: str = None,
  ip_version: typing.Union[int, float] = None,
  name: str = None,
  network_id: str = None,
  region: str = None,
  subnet_id: str = None,
  subnetpool_id: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#cidr DataOpenstackNetworkingSubnetV2#cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#description DataOpenstackNetworkingSubnetV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpDisabled">dhcp_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_disabled DataOpenstackNetworkingSubnetV2#dhcp_disabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpEnabled">dhcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_enabled DataOpenstackNetworkingSubnetV2#dhcp_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#gateway_ip DataOpenstackNetworkingSubnetV2#gateway_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#id DataOpenstackNetworkingSubnetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6AddressMode">ipv6_address_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_address_mode DataOpenstackNetworkingSubnetV2#ipv6_address_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6RaMode">ipv6_ra_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetV2#ipv6_ra_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ip_version DataOpenstackNetworkingSubnetV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#name DataOpenstackNetworkingSubnetV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#network_id DataOpenstackNetworkingSubnetV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#region DataOpenstackNetworkingSubnetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnet_id DataOpenstackNetworkingSubnetV2#subnet_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetpoolId">subnetpool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnetpool_id DataOpenstackNetworkingSubnetV2#subnetpool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tags DataOpenstackNetworkingSubnetV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#cidr DataOpenstackNetworkingSubnetV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#description DataOpenstackNetworkingSubnetV2#description}.

---

##### `dhcp_disabled`<sup>Optional</sup> <a name="dhcp_disabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpDisabled"></a>

```python
dhcp_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_disabled DataOpenstackNetworkingSubnetV2#dhcp_disabled}.

---

##### `dhcp_enabled`<sup>Optional</sup> <a name="dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpEnabled"></a>

```python
dhcp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_enabled DataOpenstackNetworkingSubnetV2#dhcp_enabled}.

---

##### `gateway_ip`<sup>Optional</sup> <a name="gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#gateway_ip DataOpenstackNetworkingSubnetV2#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#id DataOpenstackNetworkingSubnetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_address_mode`<sup>Optional</sup> <a name="ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6AddressMode"></a>

```python
ipv6_address_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_address_mode DataOpenstackNetworkingSubnetV2#ipv6_address_mode}.

---

##### `ipv6_ra_mode`<sup>Optional</sup> <a name="ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6RaMode"></a>

```python
ipv6_ra_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetV2#ipv6_ra_mode}.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ip_version DataOpenstackNetworkingSubnetV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#name DataOpenstackNetworkingSubnetV2#name}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#network_id DataOpenstackNetworkingSubnetV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#region DataOpenstackNetworkingSubnetV2#region}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnet_id DataOpenstackNetworkingSubnetV2#subnet_id}.

---

##### `subnetpool_id`<sup>Optional</sup> <a name="subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetpoolId"></a>

```python
subnetpool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnetpool_id DataOpenstackNetworkingSubnetV2#subnetpool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tags DataOpenstackNetworkingSubnetV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tenant_id DataOpenstackNetworkingSubnetV2#tenant_id}

---

### DataOpenstackNetworkingSubnetV2HostRoutes <a name="DataOpenstackNetworkingSubnetV2HostRoutes" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackNetworkingSubnetV2AllocationPoolsList <a name="DataOpenstackNetworkingSubnetV2AllocationPoolsList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference <a name="DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools">DataOpenstackNetworkingSubnetV2AllocationPools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackNetworkingSubnetV2AllocationPools
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools">DataOpenstackNetworkingSubnetV2AllocationPools</a>

---


### DataOpenstackNetworkingSubnetV2HostRoutesList <a name="DataOpenstackNetworkingSubnetV2HostRoutesList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackNetworkingSubnetV2HostRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackNetworkingSubnetV2HostRoutesOutputReference <a name="DataOpenstackNetworkingSubnetV2HostRoutesOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_v2

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr">destination_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.nextHop">next_hop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes">DataOpenstackNetworkingSubnetV2HostRoutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_cidr`<sup>Required</sup> <a name="destination_cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr"></a>

```python
destination_cidr: str
```

- *Type:* str

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.nextHop"></a>

```python
next_hop: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackNetworkingSubnetV2HostRoutes
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes">DataOpenstackNetworkingSubnetV2HostRoutes</a>

---



