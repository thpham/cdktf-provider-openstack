# `dataOpenstackImagesImageIdsV2` Submodule <a name="`dataOpenstackImagesImageIdsV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackImagesImageIdsV2 <a name="DataOpenstackImagesImageIdsV2" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2 openstack_images_image_ids_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_images_image_ids_v2

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  member_status: str = None,
  name: str = None,
  name_regex: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  region: str = None,
  size_max: typing.Union[int, float] = None,
  size_min: typing.Union[int, float] = None,
  sort: str = None,
  sort_direction: str = None,
  sort_key: str = None,
  tag: str = None,
  tags: typing.List[str] = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#id DataOpenstackImagesImageIdsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.memberStatus">member_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#member_status DataOpenstackImagesImageIdsV2#member_status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name DataOpenstackImagesImageIdsV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name_regex DataOpenstackImagesImageIdsV2#name_regex}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#owner DataOpenstackImagesImageIdsV2#owner}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#properties DataOpenstackImagesImageIdsV2#properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#region DataOpenstackImagesImageIdsV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sizeMax">size_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_max DataOpenstackImagesImageIdsV2#size_max}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sizeMin">size_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_min DataOpenstackImagesImageIdsV2#size_min}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sort">sort</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort DataOpenstackImagesImageIdsV2#sort}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_direction DataOpenstackImagesImageIdsV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_key DataOpenstackImagesImageIdsV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tag DataOpenstackImagesImageIdsV2#tag}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tags DataOpenstackImagesImageIdsV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#visibility DataOpenstackImagesImageIdsV2#visibility}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#id DataOpenstackImagesImageIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `member_status`<sup>Optional</sup> <a name="member_status" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.memberStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#member_status DataOpenstackImagesImageIdsV2#member_status}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name DataOpenstackImagesImageIdsV2#name}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.nameRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name_regex DataOpenstackImagesImageIdsV2#name_regex}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#owner DataOpenstackImagesImageIdsV2#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#properties DataOpenstackImagesImageIdsV2#properties}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#region DataOpenstackImagesImageIdsV2#region}.

---

##### `size_max`<sup>Optional</sup> <a name="size_max" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sizeMax"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_max DataOpenstackImagesImageIdsV2#size_max}.

---

##### `size_min`<sup>Optional</sup> <a name="size_min" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sizeMin"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_min DataOpenstackImagesImageIdsV2#size_min}.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sort"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort DataOpenstackImagesImageIdsV2#sort}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sortDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_direction DataOpenstackImagesImageIdsV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.sortKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_key DataOpenstackImagesImageIdsV2#sort_key}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tag DataOpenstackImagesImageIdsV2#tag}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tags DataOpenstackImagesImageIdsV2#tags}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.Initializer.parameter.visibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#visibility DataOpenstackImagesImageIdsV2#visibility}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetMemberStatus">reset_member_status</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMax">reset_size_max</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMin">reset_size_min</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSort">reset_sort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortDirection">reset_sort_direction</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortKey">reset_sort_key</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_member_status` <a name="reset_member_status" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetMemberStatus"></a>

```python
def reset_member_status() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_owner` <a name="reset_owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_properties` <a name="reset_properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_size_max` <a name="reset_size_max" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMax"></a>

```python
def reset_size_max() -> None
```

##### `reset_size_min` <a name="reset_size_min" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSizeMin"></a>

```python
def reset_size_min() -> None
```

##### `reset_sort` <a name="reset_sort" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSort"></a>

```python
def reset_sort() -> None
```

##### `reset_sort_direction` <a name="reset_sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortDirection"></a>

```python
def reset_sort_direction() -> None
```

##### `reset_sort_key` <a name="reset_sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetSortKey"></a>

```python
def reset_sort_key() -> None
```

##### `reset_tag` <a name="reset_tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackImagesImageIdsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_images_image_ids_v2

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_images_image_ids_v2

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_images_image_ids_v2

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_images_image_ids_v2

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackImagesImageIdsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackImagesImageIdsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackImagesImageIdsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackImagesImageIdsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatusInput">member_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMaxInput">size_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMinInput">size_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirectionInput">sort_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortInput">sort_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKeyInput">sort_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatus">member_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMax">size_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMin">size_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sort">sort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirection">sort_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKey">sort_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_status_input`<sup>Optional</sup> <a name="member_status_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatusInput"></a>

```python
member_status_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_max_input`<sup>Optional</sup> <a name="size_max_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMaxInput"></a>

```python
size_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_min_input`<sup>Optional</sup> <a name="size_min_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMinInput"></a>

```python
size_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_direction_input`<sup>Optional</sup> <a name="sort_direction_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirectionInput"></a>

```python
sort_direction_input: str
```

- *Type:* str

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortInput"></a>

```python
sort_input: str
```

- *Type:* str

---

##### `sort_key_input`<sup>Optional</sup> <a name="sort_key_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKeyInput"></a>

```python
sort_key_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member_status`<sup>Required</sup> <a name="member_status" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.memberStatus"></a>

```python
member_status: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size_max`<sup>Required</sup> <a name="size_max" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMax"></a>

```python
size_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_min`<sup>Required</sup> <a name="size_min" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sizeMin"></a>

```python
size_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort`<sup>Required</sup> <a name="sort" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sort"></a>

```python
sort: str
```

- *Type:* str

---

##### `sort_direction`<sup>Required</sup> <a name="sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

---

##### `sort_key`<sup>Required</sup> <a name="sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackImagesImageIdsV2Config <a name="DataOpenstackImagesImageIdsV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_images_image_ids_v2

dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  member_status: str = None,
  name: str = None,
  name_regex: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  region: str = None,
  size_max: typing.Union[int, float] = None,
  size_min: typing.Union[int, float] = None,
  sort: str = None,
  sort_direction: str = None,
  sort_key: str = None,
  tag: str = None,
  tags: typing.List[str] = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#id DataOpenstackImagesImageIdsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.memberStatus">member_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#member_status DataOpenstackImagesImageIdsV2#member_status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name DataOpenstackImagesImageIdsV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name_regex DataOpenstackImagesImageIdsV2#name_regex}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#owner DataOpenstackImagesImageIdsV2#owner}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#properties DataOpenstackImagesImageIdsV2#properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#region DataOpenstackImagesImageIdsV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMax">size_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_max DataOpenstackImagesImageIdsV2#size_max}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMin">size_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_min DataOpenstackImagesImageIdsV2#size_min}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sort">sort</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort DataOpenstackImagesImageIdsV2#sort}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortDirection">sort_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_direction DataOpenstackImagesImageIdsV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortKey">sort_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_key DataOpenstackImagesImageIdsV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tag DataOpenstackImagesImageIdsV2#tag}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tags DataOpenstackImagesImageIdsV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#visibility DataOpenstackImagesImageIdsV2#visibility}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#id DataOpenstackImagesImageIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `member_status`<sup>Optional</sup> <a name="member_status" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.memberStatus"></a>

```python
member_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#member_status DataOpenstackImagesImageIdsV2#member_status}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name DataOpenstackImagesImageIdsV2#name}.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#name_regex DataOpenstackImagesImageIdsV2#name_regex}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#owner DataOpenstackImagesImageIdsV2#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#properties DataOpenstackImagesImageIdsV2#properties}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#region DataOpenstackImagesImageIdsV2#region}.

---

##### `size_max`<sup>Optional</sup> <a name="size_max" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMax"></a>

```python
size_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_max DataOpenstackImagesImageIdsV2#size_max}.

---

##### `size_min`<sup>Optional</sup> <a name="size_min" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sizeMin"></a>

```python
size_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#size_min DataOpenstackImagesImageIdsV2#size_min}.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sort"></a>

```python
sort: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort DataOpenstackImagesImageIdsV2#sort}.

---

##### `sort_direction`<sup>Optional</sup> <a name="sort_direction" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortDirection"></a>

```python
sort_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_direction DataOpenstackImagesImageIdsV2#sort_direction}.

---

##### `sort_key`<sup>Optional</sup> <a name="sort_key" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.sortKey"></a>

```python
sort_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#sort_key DataOpenstackImagesImageIdsV2#sort_key}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tag DataOpenstackImagesImageIdsV2#tag}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#tags DataOpenstackImagesImageIdsV2#tags}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.dataOpenstackImagesImageIdsV2.DataOpenstackImagesImageIdsV2Config.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/images_image_ids_v2#visibility DataOpenstackImagesImageIdsV2#visibility}.

---



