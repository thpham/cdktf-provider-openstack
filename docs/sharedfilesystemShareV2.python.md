# `sharedfilesystemShareV2` Submodule <a name="`sharedfilesystemShareV2` Submodule" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedfilesystemShareV2 <a name="SharedfilesystemShareV2" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2 openstack_sharedfilesystem_share_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2(
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
  share_proto: str,
  size: typing.Union[int, float],
  availability_zone: str = None,
  description: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  region: str = None,
  share_network_id: str = None,
  share_type: str = None,
  snapshot_id: str = None,
  timeouts: SharedfilesystemShareV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#name SharedfilesystemShareV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.shareProto">share_proto</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_proto SharedfilesystemShareV2#share_proto}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#size SharedfilesystemShareV2#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#availability_zone SharedfilesystemShareV2#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#description SharedfilesystemShareV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#id SharedfilesystemShareV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#is_public SharedfilesystemShareV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#metadata SharedfilesystemShareV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#region SharedfilesystemShareV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.shareNetworkId">share_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_network_id SharedfilesystemShareV2#share_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.shareType">share_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_type SharedfilesystemShareV2#share_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#snapshot_id SharedfilesystemShareV2#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#name SharedfilesystemShareV2#name}.

---

##### `share_proto`<sup>Required</sup> <a name="share_proto" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.shareProto"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_proto SharedfilesystemShareV2#share_proto}.

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#size SharedfilesystemShareV2#size}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#availability_zone SharedfilesystemShareV2#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#description SharedfilesystemShareV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#id SharedfilesystemShareV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#is_public SharedfilesystemShareV2#is_public}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#metadata SharedfilesystemShareV2#metadata}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#region SharedfilesystemShareV2#region}.

---

##### `share_network_id`<sup>Optional</sup> <a name="share_network_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.shareNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_network_id SharedfilesystemShareV2#share_network_id}.

---

##### `share_type`<sup>Optional</sup> <a name="share_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.shareType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_type SharedfilesystemShareV2#share_type}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#snapshot_id SharedfilesystemShareV2#snapshot_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#timeouts SharedfilesystemShareV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareNetworkId">reset_share_network_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareType">reset_share_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#create SharedfilesystemShareV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#delete SharedfilesystemShareV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#update SharedfilesystemShareV2#update}.

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_share_network_id` <a name="reset_share_network_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareNetworkId"></a>

```python
def reset_share_network_id() -> None
```

##### `reset_share_type` <a name="reset_share_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareType"></a>

```python
def reset_share_type() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SharedfilesystemShareV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SharedfilesystemShareV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SharedfilesystemShareV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SharedfilesystemShareV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedfilesystemShareV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.allMetadata">all_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.exportLocations">export_locations</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList">SharedfilesystemShareV2ExportLocationsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.hasReplicas">has_replicas</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.replicationType">replication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareServerId">share_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference">SharedfilesystemShareV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkIdInput">share_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProtoInput">share_proto_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareTypeInput">share_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkId">share_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProto">share_proto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareType">share_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_metadata`<sup>Required</sup> <a name="all_metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.allMetadata"></a>

```python
all_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `export_locations`<sup>Required</sup> <a name="export_locations" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.exportLocations"></a>

```python
export_locations: SharedfilesystemShareV2ExportLocationsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList">SharedfilesystemShareV2ExportLocationsList</a>

---

##### `has_replicas`<sup>Required</sup> <a name="has_replicas" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.hasReplicas"></a>

```python
has_replicas: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.replicationType"></a>

```python
replication_type: str
```

- *Type:* str

---

##### `share_server_id`<sup>Required</sup> <a name="share_server_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareServerId"></a>

```python
share_server_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeouts"></a>

```python
timeouts: SharedfilesystemShareV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference">SharedfilesystemShareV2TimeoutsOutputReference</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `share_network_id_input`<sup>Optional</sup> <a name="share_network_id_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkIdInput"></a>

```python
share_network_id_input: str
```

- *Type:* str

---

##### `share_proto_input`<sup>Optional</sup> <a name="share_proto_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProtoInput"></a>

```python
share_proto_input: str
```

- *Type:* str

---

##### `share_type_input`<sup>Optional</sup> <a name="share_type_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareTypeInput"></a>

```python
share_type_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SharedfilesystemShareV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `share_network_id`<sup>Required</sup> <a name="share_network_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkId"></a>

```python
share_network_id: str
```

- *Type:* str

---

##### `share_proto`<sup>Required</sup> <a name="share_proto" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProto"></a>

```python
share_proto: str
```

- *Type:* str

---

##### `share_type`<sup>Required</sup> <a name="share_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareType"></a>

```python
share_type: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SharedfilesystemShareV2Config <a name="SharedfilesystemShareV2Config" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  share_proto: str,
  size: typing.Union[int, float],
  availability_zone: str = None,
  description: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  metadata: typing.Mapping[str] = None,
  region: str = None,
  share_network_id: str = None,
  share_type: str = None,
  snapshot_id: str = None,
  timeouts: SharedfilesystemShareV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#name SharedfilesystemShareV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareProto">share_proto</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_proto SharedfilesystemShareV2#share_proto}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#size SharedfilesystemShareV2#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#availability_zone SharedfilesystemShareV2#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#description SharedfilesystemShareV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#id SharedfilesystemShareV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#is_public SharedfilesystemShareV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#metadata SharedfilesystemShareV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#region SharedfilesystemShareV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareNetworkId">share_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_network_id SharedfilesystemShareV2#share_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareType">share_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_type SharedfilesystemShareV2#share_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#snapshot_id SharedfilesystemShareV2#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#name SharedfilesystemShareV2#name}.

---

##### `share_proto`<sup>Required</sup> <a name="share_proto" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareProto"></a>

```python
share_proto: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_proto SharedfilesystemShareV2#share_proto}.

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#size SharedfilesystemShareV2#size}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#availability_zone SharedfilesystemShareV2#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#description SharedfilesystemShareV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#id SharedfilesystemShareV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#is_public SharedfilesystemShareV2#is_public}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#metadata SharedfilesystemShareV2#metadata}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#region SharedfilesystemShareV2#region}.

---

##### `share_network_id`<sup>Optional</sup> <a name="share_network_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareNetworkId"></a>

```python
share_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_network_id SharedfilesystemShareV2#share_network_id}.

---

##### `share_type`<sup>Optional</sup> <a name="share_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareType"></a>

```python
share_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_type SharedfilesystemShareV2#share_type}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#snapshot_id SharedfilesystemShareV2#snapshot_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.timeouts"></a>

```python
timeouts: SharedfilesystemShareV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#timeouts SharedfilesystemShareV2#timeouts}

---

### SharedfilesystemShareV2ExportLocations <a name="SharedfilesystemShareV2ExportLocations" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations()
```


### SharedfilesystemShareV2Timeouts <a name="SharedfilesystemShareV2Timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#create SharedfilesystemShareV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#delete SharedfilesystemShareV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#update SharedfilesystemShareV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#create SharedfilesystemShareV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#delete SharedfilesystemShareV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#update SharedfilesystemShareV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedfilesystemShareV2ExportLocationsList <a name="SharedfilesystemShareV2ExportLocationsList" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SharedfilesystemShareV2ExportLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SharedfilesystemShareV2ExportLocationsOutputReference <a name="SharedfilesystemShareV2ExportLocationsOutputReference" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.preferred">preferred</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations">SharedfilesystemShareV2ExportLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.preferred"></a>

```python
preferred: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.internalValue"></a>

```python
internal_value: SharedfilesystemShareV2ExportLocations
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations">SharedfilesystemShareV2ExportLocations</a>

---


### SharedfilesystemShareV2TimeoutsOutputReference <a name="SharedfilesystemShareV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_v2

sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharedfilesystemShareV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>]

---



