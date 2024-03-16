# `dataOpenstackNetworkingSubnetIdsV2` Submodule <a name="`dataOpenstackNetworkingSubnetIdsV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingSubnetIdsV2 <a name="DataOpenstackNetworkingSubnetIdsV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2 openstack_networking_subnet_ids_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_ids_v2

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2(
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
  dhcp_enabled: typing.Union[bool, IResolvable] = None,
  gateway_ip: str = None,
  id: str = None,
  ipv6_address_mode: str = None,
  ipv6_ra_mode: str = None,
  ip_version: typing.Union[int, float] = None,
  name: str = None,
  name_regex: str = None,
  network_id: str = None,
  region: str = None,
  sort_direction: str = None,
  sort_key: str = None,
  subnetpool_id: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#cidr DataOpenstackNetworkingSubnetIdsV2#cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#description DataOpenstackNetworkingSubnetIdsV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.dhcpEnabled">dhcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#dhcp_enabled DataOpenstackNetworkingSubnetIdsV2#dhcp_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#gateway_ip DataOpenstackNetworkingSubnetIdsV2#gateway_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#id DataOpenstackNetworkingSubnetIdsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.ipv6AddressMode">ipv6_address_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_address_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_address_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.ipv6RaMode">ipv6_ra_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_ra_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ip_version DataOpenstackNetworkingSubnetIdsV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name DataOpenstackNetworkingSubnetIdsV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name_regex DataOpenstackNetworkingSubnetIdsV2#name_regex}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#network_id DataOpenstackNetworkingSubnetIdsV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#region DataOpenstackNetworkingSubnetIdsV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_direction DataOpenstackNetworkingSubnetIdsV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_key DataOpenstackNetworkingSubnetIdsV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.subnetpoolId">subnetpool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#subnetpool_id DataOpenstackNetworkingSubnetIdsV2#subnetpool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tags DataOpenstackNetworkingSubnetIdsV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#cidr DataOpenstackNetworkingSubnetIdsV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#description DataOpenstackNetworkingSubnetIdsV2#description}.

---

##### `dhcp_enabled`<sup>Optional</sup> <a name="dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.dhcpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#dhcp_enabled DataOpenstackNetworkingSubnetIdsV2#dhcp_enabled}.

---

##### `gateway_ip`<sup>Optional</sup> <a name="gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.gatewayIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#gateway_ip DataOpenstackNetworkingSubnetIdsV2#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#id DataOpenstackNetworkingSubnetIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_address_mode`<sup>Optional</sup> <a name="ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.ipv6AddressMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_address_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_address_mode}.

---

##### `ipv6_ra_mode`<sup>Optional</sup> <a name="ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.ipv6RaMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_ra_mode}.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.ipVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ip_version DataOpenstackNetworkingSubnetIdsV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name DataOpenstackNetworkingSubnetIdsV2#name}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.nameRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name_regex DataOpenstackNetworkingSubnetIdsV2#name_regex}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#network_id DataOpenstackNetworkingSubnetIdsV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#region DataOpenstackNetworkingSubnetIdsV2#region}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.sortDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_direction DataOpenstackNetworkingSubnetIdsV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.sortKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_key DataOpenstackNetworkingSubnetIdsV2#sort_key}.

---

##### `subnetpool_id`<sup>Optional</sup> <a name="subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.subnetpoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#subnetpool_id DataOpenstackNetworkingSubnetIdsV2#subnetpool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tags DataOpenstackNetworkingSubnetIdsV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.tenantId"></a>

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tenant_id DataOpenstackNetworkingSubnetIdsV2#tenant_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDhcpEnabled">reset_dhcp_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetGatewayIp">reset_gateway_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6AddressMode">reset_ipv6_address_mode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6RaMode">reset_ipv6_ra_mode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortDirection">reset_sort_direction</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortKey">reset_sort_key</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSubnetpoolId">reset_subnetpool_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cidr` <a name="reset_cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dhcp_enabled` <a name="reset_dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDhcpEnabled"></a>

```python
def reset_dhcp_enabled() -> None
```

##### `reset_gateway_ip` <a name="reset_gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetGatewayIp"></a>

```python
def reset_gateway_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_address_mode` <a name="reset_ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6AddressMode"></a>

```python
def reset_ipv6_address_mode() -> None
```

##### `reset_ipv6_ra_mode` <a name="reset_ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6RaMode"></a>

```python
def reset_ipv6_ra_mode() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sort_direction` <a name="reset_sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortDirection"></a>

```python
def reset_sort_direction() -> None
```

##### `reset_sort_key` <a name="reset_sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortKey"></a>

```python
def reset_sort_key() -> None
```

##### `reset_subnetpool_id` <a name="reset_subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSubnetpoolId"></a>

```python
def reset_subnetpool_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingSubnetIdsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_ids_v2

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_ids_v2

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_ids_v2

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_ids_v2

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackNetworkingSubnetIdsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackNetworkingSubnetIdsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackNetworkingSubnetIdsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingSubnetIdsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabledInput">dhcp_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIpInput">gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressModeInput">ipv6_address_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaModeInput">ipv6_ra_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersionInput">ip_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirectionInput">sort_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKeyInput">sort_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolIdInput">subnetpool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabled">dhcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressMode">ipv6_address_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaMode">ipv6_ra_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirection">sort_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKey">sort_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolId">subnetpool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dhcp_enabled_input`<sup>Optional</sup> <a name="dhcp_enabled_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabledInput"></a>

```python
dhcp_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_ip_input`<sup>Optional</sup> <a name="gateway_ip_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIpInput"></a>

```python
gateway_ip_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_address_mode_input`<sup>Optional</sup> <a name="ipv6_address_mode_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressModeInput"></a>

```python
ipv6_address_mode_input: str
```

- *Type:* str

---

##### `ipv6_ra_mode_input`<sup>Optional</sup> <a name="ipv6_ra_mode_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaModeInput"></a>

```python
ipv6_ra_mode_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersionInput"></a>

```python
ip_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sort_direction_input`<sup>Optional</sup> <a name="sort_direction_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirectionInput"></a>

```python
sort_direction_input: str
```

- *Type:* str

---

##### `sort_key_input`<sup>Optional</sup> <a name="sort_key_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKeyInput"></a>

```python
sort_key_input: str
```

- *Type:* str

---

##### `subnetpool_id_input`<sup>Optional</sup> <a name="subnetpool_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolIdInput"></a>

```python
subnetpool_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dhcp_enabled`<sup>Required</sup> <a name="dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabled"></a>

```python
dhcp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_address_mode`<sup>Required</sup> <a name="ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressMode"></a>

```python
ipv6_address_mode: str
```

- *Type:* str

---

##### `ipv6_ra_mode`<sup>Required</sup> <a name="ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaMode"></a>

```python
ipv6_ra_mode: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sort_direction`<sup>Required</sup> <a name="sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

---

##### `sort_key`<sup>Required</sup> <a name="sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

---

##### `subnetpool_id`<sup>Required</sup> <a name="subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolId"></a>

```python
subnetpool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingSubnetIdsV2Config <a name="DataOpenstackNetworkingSubnetIdsV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_networking_subnet_ids_v2

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cidr: str = None,
  description: str = None,
  dhcp_enabled: typing.Union[bool, IResolvable] = None,
  gateway_ip: str = None,
  id: str = None,
  ipv6_address_mode: str = None,
  ipv6_ra_mode: str = None,
  ip_version: typing.Union[int, float] = None,
  name: str = None,
  name_regex: str = None,
  network_id: str = None,
  region: str = None,
  sort_direction: str = None,
  sort_key: str = None,
  subnetpool_id: str = None,
  tags: typing.List[str] = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#cidr DataOpenstackNetworkingSubnetIdsV2#cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#description DataOpenstackNetworkingSubnetIdsV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dhcpEnabled">dhcp_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#dhcp_enabled DataOpenstackNetworkingSubnetIdsV2#dhcp_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#gateway_ip DataOpenstackNetworkingSubnetIdsV2#gateway_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#id DataOpenstackNetworkingSubnetIdsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6AddressMode">ipv6_address_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_address_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_address_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6RaMode">ipv6_ra_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_ra_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipVersion">ip_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ip_version DataOpenstackNetworkingSubnetIdsV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name DataOpenstackNetworkingSubnetIdsV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name_regex DataOpenstackNetworkingSubnetIdsV2#name_regex}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#network_id DataOpenstackNetworkingSubnetIdsV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#region DataOpenstackNetworkingSubnetIdsV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_direction DataOpenstackNetworkingSubnetIdsV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_key DataOpenstackNetworkingSubnetIdsV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.subnetpoolId">subnetpool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#subnetpool_id DataOpenstackNetworkingSubnetIdsV2#subnetpool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tags DataOpenstackNetworkingSubnetIdsV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#cidr DataOpenstackNetworkingSubnetIdsV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#description DataOpenstackNetworkingSubnetIdsV2#description}.

---

##### `dhcp_enabled`<sup>Optional</sup> <a name="dhcp_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dhcpEnabled"></a>

```python
dhcp_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#dhcp_enabled DataOpenstackNetworkingSubnetIdsV2#dhcp_enabled}.

---

##### `gateway_ip`<sup>Optional</sup> <a name="gateway_ip" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#gateway_ip DataOpenstackNetworkingSubnetIdsV2#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#id DataOpenstackNetworkingSubnetIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_address_mode`<sup>Optional</sup> <a name="ipv6_address_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6AddressMode"></a>

```python
ipv6_address_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_address_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_address_mode}.

---

##### `ipv6_ra_mode`<sup>Optional</sup> <a name="ipv6_ra_mode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6RaMode"></a>

```python
ipv6_ra_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_ra_mode}.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipVersion"></a>

```python
ip_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ip_version DataOpenstackNetworkingSubnetIdsV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name DataOpenstackNetworkingSubnetIdsV2#name}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name_regex DataOpenstackNetworkingSubnetIdsV2#name_regex}.

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#network_id DataOpenstackNetworkingSubnetIdsV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#region DataOpenstackNetworkingSubnetIdsV2#region}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_direction DataOpenstackNetworkingSubnetIdsV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_key DataOpenstackNetworkingSubnetIdsV2#sort_key}.

---

##### `subnetpool_id`<sup>Optional</sup> <a name="subnetpool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.subnetpoolId"></a>

```python
subnetpool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#subnetpool_id DataOpenstackNetworkingSubnetIdsV2#subnetpool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tags DataOpenstackNetworkingSubnetIdsV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tenant_id DataOpenstackNetworkingSubnetIdsV2#tenant_id}

---



