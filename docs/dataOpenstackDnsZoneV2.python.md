# `dataOpenstackDnsZoneV2` Submodule <a name="`dataOpenstackDnsZoneV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackDnsZoneV2 <a name="DataOpenstackDnsZoneV2" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2 openstack_dns_zone_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_dns_zone_v2

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  all_projects: str = None,
  attributes: typing.Mapping[str] = None,
  created_at: str = None,
  description: str = None,
  email: str = None,
  id: str = None,
  masters: typing.List[str] = None,
  name: str = None,
  pool_id: str = None,
  project_id: str = None,
  region: str = None,
  serial: typing.Union[int, float] = None,
  status: str = None,
  transferred_at: str = None,
  ttl: typing.Union[int, float] = None,
  type: str = None,
  updated_at: str = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.allProjects">all_projects</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#all_projects DataOpenstackDnsZoneV2#all_projects}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#attributes DataOpenstackDnsZoneV2#attributes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#created_at DataOpenstackDnsZoneV2#created_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#description DataOpenstackDnsZoneV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#email DataOpenstackDnsZoneV2#email}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#id DataOpenstackDnsZoneV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.masters">masters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#masters DataOpenstackDnsZoneV2#masters}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#name DataOpenstackDnsZoneV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#pool_id DataOpenstackDnsZoneV2#pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#project_id DataOpenstackDnsZoneV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#region DataOpenstackDnsZoneV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.serial">serial</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#serial DataOpenstackDnsZoneV2#serial}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#status DataOpenstackDnsZoneV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.transferredAt">transferred_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#transferred_at DataOpenstackDnsZoneV2#transferred_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#ttl DataOpenstackDnsZoneV2#ttl}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#type DataOpenstackDnsZoneV2#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#updated_at DataOpenstackDnsZoneV2#updated_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#version DataOpenstackDnsZoneV2#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_projects`<sup>Optional</sup> <a name="all_projects" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.allProjects"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#all_projects DataOpenstackDnsZoneV2#all_projects}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#attributes DataOpenstackDnsZoneV2#attributes}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.createdAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#created_at DataOpenstackDnsZoneV2#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#description DataOpenstackDnsZoneV2#description}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#email DataOpenstackDnsZoneV2#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#id DataOpenstackDnsZoneV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masters`<sup>Optional</sup> <a name="masters" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.masters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#masters DataOpenstackDnsZoneV2#masters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#name DataOpenstackDnsZoneV2#name}.

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.poolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#pool_id DataOpenstackDnsZoneV2#pool_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#project_id DataOpenstackDnsZoneV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#region DataOpenstackDnsZoneV2#region}.

---

##### `serial`<sup>Optional</sup> <a name="serial" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.serial"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#serial DataOpenstackDnsZoneV2#serial}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#status DataOpenstackDnsZoneV2#status}.

---

##### `transferred_at`<sup>Optional</sup> <a name="transferred_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.transferredAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#transferred_at DataOpenstackDnsZoneV2#transferred_at}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#ttl DataOpenstackDnsZoneV2#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#type DataOpenstackDnsZoneV2#type}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.updatedAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#updated_at DataOpenstackDnsZoneV2#updated_at}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#version DataOpenstackDnsZoneV2#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAllProjects">reset_all_projects</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetMasters">reset_masters</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetPoolId">reset_pool_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetSerial">reset_serial</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTransferredAt">reset_transferred_at</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_all_projects` <a name="reset_all_projects" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAllProjects"></a>

```python
def reset_all_projects() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_email` <a name="reset_email" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_masters` <a name="reset_masters" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetMasters"></a>

```python
def reset_masters() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_pool_id` <a name="reset_pool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetPoolId"></a>

```python
def reset_pool_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_serial` <a name="reset_serial" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetSerial"></a>

```python
def reset_serial() -> None
```

##### `reset_status` <a name="reset_status" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_transferred_at` <a name="reset_transferred_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTransferredAt"></a>

```python
def reset_transferred_at() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_type` <a name="reset_type" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_version` <a name="reset_version" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackDnsZoneV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_dns_zone_v2

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_dns_zone_v2

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_dns_zone_v2

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_dns_zone_v2

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackDnsZoneV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackDnsZoneV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackDnsZoneV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackDnsZoneV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjectsInput">all_projects_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.mastersInput">masters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serialInput">serial_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAtInput">transferred_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAtInput">updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjects">all_projects</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.masters">masters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serial">serial</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAt">transferred_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `all_projects_input`<sup>Optional</sup> <a name="all_projects_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjectsInput"></a>

```python
all_projects_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masters_input`<sup>Optional</sup> <a name="masters_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.mastersInput"></a>

```python
masters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `serial_input`<sup>Optional</sup> <a name="serial_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serialInput"></a>

```python
serial_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `transferred_at_input`<sup>Optional</sup> <a name="transferred_at_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAtInput"></a>

```python
transferred_at_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAtInput"></a>

```python
updated_at_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `all_projects`<sup>Required</sup> <a name="all_projects" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.allProjects"></a>

```python
all_projects: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masters`<sup>Required</sup> <a name="masters" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.masters"></a>

```python
masters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `serial`<sup>Required</sup> <a name="serial" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.serial"></a>

```python
serial: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `transferred_at`<sup>Required</sup> <a name="transferred_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.transferredAt"></a>

```python
transferred_at: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackDnsZoneV2Config <a name="DataOpenstackDnsZoneV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_dns_zone_v2

dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  all_projects: str = None,
  attributes: typing.Mapping[str] = None,
  created_at: str = None,
  description: str = None,
  email: str = None,
  id: str = None,
  masters: typing.List[str] = None,
  name: str = None,
  pool_id: str = None,
  project_id: str = None,
  region: str = None,
  serial: typing.Union[int, float] = None,
  status: str = None,
  transferred_at: str = None,
  ttl: typing.Union[int, float] = None,
  type: str = None,
  updated_at: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.allProjects">all_projects</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#all_projects DataOpenstackDnsZoneV2#all_projects}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#attributes DataOpenstackDnsZoneV2#attributes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#created_at DataOpenstackDnsZoneV2#created_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#description DataOpenstackDnsZoneV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#email DataOpenstackDnsZoneV2#email}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#id DataOpenstackDnsZoneV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.masters">masters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#masters DataOpenstackDnsZoneV2#masters}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#name DataOpenstackDnsZoneV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#pool_id DataOpenstackDnsZoneV2#pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#project_id DataOpenstackDnsZoneV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#region DataOpenstackDnsZoneV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.serial">serial</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#serial DataOpenstackDnsZoneV2#serial}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#status DataOpenstackDnsZoneV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.transferredAt">transferred_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#transferred_at DataOpenstackDnsZoneV2#transferred_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#ttl DataOpenstackDnsZoneV2#ttl}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#type DataOpenstackDnsZoneV2#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#updated_at DataOpenstackDnsZoneV2#updated_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#version DataOpenstackDnsZoneV2#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_projects`<sup>Optional</sup> <a name="all_projects" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.allProjects"></a>

```python
all_projects: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#all_projects DataOpenstackDnsZoneV2#all_projects}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#attributes DataOpenstackDnsZoneV2#attributes}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#created_at DataOpenstackDnsZoneV2#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#description DataOpenstackDnsZoneV2#description}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#email DataOpenstackDnsZoneV2#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#id DataOpenstackDnsZoneV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masters`<sup>Optional</sup> <a name="masters" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.masters"></a>

```python
masters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#masters DataOpenstackDnsZoneV2#masters}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#name DataOpenstackDnsZoneV2#name}.

---

##### `pool_id`<sup>Optional</sup> <a name="pool_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#pool_id DataOpenstackDnsZoneV2#pool_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#project_id DataOpenstackDnsZoneV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#region DataOpenstackDnsZoneV2#region}.

---

##### `serial`<sup>Optional</sup> <a name="serial" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.serial"></a>

```python
serial: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#serial DataOpenstackDnsZoneV2#serial}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#status DataOpenstackDnsZoneV2#status}.

---

##### `transferred_at`<sup>Optional</sup> <a name="transferred_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.transferredAt"></a>

```python
transferred_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#transferred_at DataOpenstackDnsZoneV2#transferred_at}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#ttl DataOpenstackDnsZoneV2#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#type DataOpenstackDnsZoneV2#type}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#updated_at DataOpenstackDnsZoneV2#updated_at}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dataOpenstackDnsZoneV2.DataOpenstackDnsZoneV2Config.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/dns_zone_v2#version DataOpenstackDnsZoneV2#version}.

---



