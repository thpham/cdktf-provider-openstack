# `dataOpenstackSharedfilesystemShareV2` Submodule <a name="`dataOpenstackSharedfilesystemShareV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackSharedfilesystemShareV2 <a name="DataOpenstackSharedfilesystemShareV2" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2 openstack_sharedfilesystem_share_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2(
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
  export_location_path: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  name: str = None,
  region: str = None,
  share_network_id: str = None,
  snapshot_id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#description DataOpenstackSharedfilesystemShareV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.exportLocationPath">export_location_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#export_location_path DataOpenstackSharedfilesystemShareV2#export_location_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#id DataOpenstackSharedfilesystemShareV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#is_public DataOpenstackSharedfilesystemShareV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#metadata DataOpenstackSharedfilesystemShareV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#name DataOpenstackSharedfilesystemShareV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#region DataOpenstackSharedfilesystemShareV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.shareNetworkId">share_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#share_network_id DataOpenstackSharedfilesystemShareV2#share_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#snapshot_id DataOpenstackSharedfilesystemShareV2#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#status DataOpenstackSharedfilesystemShareV2#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#description DataOpenstackSharedfilesystemShareV2#description}.

---

##### `export_location_path`<sup>Optional</sup> <a name="export_location_path" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.exportLocationPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#export_location_path DataOpenstackSharedfilesystemShareV2#export_location_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#id DataOpenstackSharedfilesystemShareV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#is_public DataOpenstackSharedfilesystemShareV2#is_public}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#metadata DataOpenstackSharedfilesystemShareV2#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#name DataOpenstackSharedfilesystemShareV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#region DataOpenstackSharedfilesystemShareV2#region}.

---

##### `share_network_id`<sup>Optional</sup> <a name="share_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.shareNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#share_network_id DataOpenstackSharedfilesystemShareV2#share_network_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#snapshot_id DataOpenstackSharedfilesystemShareV2#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#status DataOpenstackSharedfilesystemShareV2#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetExportLocationPath">reset_export_location_path</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetShareNetworkId">reset_share_network_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_export_location_path` <a name="reset_export_location_path" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetExportLocationPath"></a>

```python
def reset_export_location_path() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_share_network_id` <a name="reset_share_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetShareNetworkId"></a>

```python
def reset_share_network_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_status` <a name="reset_status" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackSharedfilesystemShareV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackSharedfilesystemShareV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackSharedfilesystemShareV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackSharedfilesystemShareV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackSharedfilesystemShareV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.exportLocations">export_locations</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList">DataOpenstackSharedfilesystemShareV2ExportLocationsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.shareProto">share_proto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.exportLocationPathInput">export_location_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.shareNetworkIdInput">share_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.exportLocationPath">export_location_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.shareNetworkId">share_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `export_locations`<sup>Required</sup> <a name="export_locations" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.exportLocations"></a>

```python
export_locations: DataOpenstackSharedfilesystemShareV2ExportLocationsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList">DataOpenstackSharedfilesystemShareV2ExportLocationsList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `share_proto`<sup>Required</sup> <a name="share_proto" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.shareProto"></a>

```python
share_proto: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `export_location_path_input`<sup>Optional</sup> <a name="export_location_path_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.exportLocationPathInput"></a>

```python
export_location_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `share_network_id_input`<sup>Optional</sup> <a name="share_network_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.shareNetworkIdInput"></a>

```python
share_network_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `export_location_path`<sup>Required</sup> <a name="export_location_path" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.exportLocationPath"></a>

```python
export_location_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `share_network_id`<sup>Required</sup> <a name="share_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.shareNetworkId"></a>

```python
share_network_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackSharedfilesystemShareV2Config <a name="DataOpenstackSharedfilesystemShareV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  export_location_path: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  name: str = None,
  region: str = None,
  share_network_id: str = None,
  snapshot_id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#description DataOpenstackSharedfilesystemShareV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.exportLocationPath">export_location_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#export_location_path DataOpenstackSharedfilesystemShareV2#export_location_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#id DataOpenstackSharedfilesystemShareV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#is_public DataOpenstackSharedfilesystemShareV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#metadata DataOpenstackSharedfilesystemShareV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#name DataOpenstackSharedfilesystemShareV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#region DataOpenstackSharedfilesystemShareV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.shareNetworkId">share_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#share_network_id DataOpenstackSharedfilesystemShareV2#share_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#snapshot_id DataOpenstackSharedfilesystemShareV2#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#status DataOpenstackSharedfilesystemShareV2#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#description DataOpenstackSharedfilesystemShareV2#description}.

---

##### `export_location_path`<sup>Optional</sup> <a name="export_location_path" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.exportLocationPath"></a>

```python
export_location_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#export_location_path DataOpenstackSharedfilesystemShareV2#export_location_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#id DataOpenstackSharedfilesystemShareV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#is_public DataOpenstackSharedfilesystemShareV2#is_public}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#metadata DataOpenstackSharedfilesystemShareV2#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#name DataOpenstackSharedfilesystemShareV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#region DataOpenstackSharedfilesystemShareV2#region}.

---

##### `share_network_id`<sup>Optional</sup> <a name="share_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.shareNetworkId"></a>

```python
share_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#share_network_id DataOpenstackSharedfilesystemShareV2#share_network_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#snapshot_id DataOpenstackSharedfilesystemShareV2#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/sharedfilesystem_share_v2#status DataOpenstackSharedfilesystemShareV2#status}.

---

### DataOpenstackSharedfilesystemShareV2ExportLocations <a name="DataOpenstackSharedfilesystemShareV2ExportLocations" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocations"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocations.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackSharedfilesystemShareV2ExportLocationsList <a name="DataOpenstackSharedfilesystemShareV2ExportLocationsList" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference <a name="DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_sharedfilesystem_share_v2

dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.preferred">preferred</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocations">DataOpenstackSharedfilesystemShareV2ExportLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.preferred"></a>

```python
preferred: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackSharedfilesystemShareV2ExportLocations
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackSharedfilesystemShareV2.DataOpenstackSharedfilesystemShareV2ExportLocations">DataOpenstackSharedfilesystemShareV2ExportLocations</a>

---



