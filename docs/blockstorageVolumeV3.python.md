# `blockstorageVolumeV3` Submodule <a name="`blockstorageVolumeV3` Submodule" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageVolumeV3 <a name="BlockstorageVolumeV3" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3 openstack_blockstorage_volume_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  size: typing.Union[int, float],
  availability_zone: str = None,
  backup_id: str = None,
  consistency_group_id: str = None,
  description: str = None,
  enable_online_resize: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_id: str = None,
  metadata: typing.Mapping[str] = None,
  multiattach: typing.Union[bool, IResolvable] = None,
  name: str = None,
  region: str = None,
  scheduler_hints: typing.Union[IResolvable, typing.List[BlockstorageVolumeV3SchedulerHints]] = None,
  snapshot_id: str = None,
  source_replica: str = None,
  source_vol_id: str = None,
  timeouts: BlockstorageVolumeV3Timeouts = None,
  volume_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#size BlockstorageVolumeV3#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#availability_zone BlockstorageVolumeV3#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#backup_id BlockstorageVolumeV3#backup_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.consistencyGroupId">consistency_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#consistency_group_id BlockstorageVolumeV3#consistency_group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#description BlockstorageVolumeV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.enableOnlineResize">enable_online_resize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#enable_online_resize BlockstorageVolumeV3#enable_online_resize}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#id BlockstorageVolumeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#image_id BlockstorageVolumeV3#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#metadata BlockstorageVolumeV3#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.multiattach">multiattach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#multiattach BlockstorageVolumeV3#multiattach}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#name BlockstorageVolumeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#region BlockstorageVolumeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.schedulerHints">scheduler_hints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]</code> | scheduler_hints block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#snapshot_id BlockstorageVolumeV3#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.sourceReplica">source_replica</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_replica BlockstorageVolumeV3#source_replica}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.sourceVolId">source_vol_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_vol_id BlockstorageVolumeV3#source_vol_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#volume_type BlockstorageVolumeV3#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#size BlockstorageVolumeV3#size}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#availability_zone BlockstorageVolumeV3#availability_zone}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#backup_id BlockstorageVolumeV3#backup_id}.

---

##### `consistency_group_id`<sup>Optional</sup> <a name="consistency_group_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.consistencyGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#consistency_group_id BlockstorageVolumeV3#consistency_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#description BlockstorageVolumeV3#description}.

---

##### `enable_online_resize`<sup>Optional</sup> <a name="enable_online_resize" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.enableOnlineResize"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#enable_online_resize BlockstorageVolumeV3#enable_online_resize}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#id BlockstorageVolumeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#image_id BlockstorageVolumeV3#image_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#metadata BlockstorageVolumeV3#metadata}.

---

##### `multiattach`<sup>Optional</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.multiattach"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#multiattach BlockstorageVolumeV3#multiattach}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#name BlockstorageVolumeV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#region BlockstorageVolumeV3#region}.

---

##### `scheduler_hints`<sup>Optional</sup> <a name="scheduler_hints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.schedulerHints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]

scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#scheduler_hints BlockstorageVolumeV3#scheduler_hints}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#snapshot_id BlockstorageVolumeV3#snapshot_id}.

---

##### `source_replica`<sup>Optional</sup> <a name="source_replica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.sourceReplica"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_replica BlockstorageVolumeV3#source_replica}.

---

##### `source_vol_id`<sup>Optional</sup> <a name="source_vol_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.sourceVolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_vol_id BlockstorageVolumeV3#source_vol_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#timeouts BlockstorageVolumeV3#timeouts}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#volume_type BlockstorageVolumeV3#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putSchedulerHints">put_scheduler_hints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetConsistencyGroupId">reset_consistency_group_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetEnableOnlineResize">reset_enable_online_resize</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMultiattach">reset_multiattach</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSchedulerHints">reset_scheduler_hints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceReplica">reset_source_replica</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceVolId">reset_source_vol_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scheduler_hints` <a name="put_scheduler_hints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putSchedulerHints"></a>

```python
def put_scheduler_hints(
  value: typing.Union[IResolvable, typing.List[BlockstorageVolumeV3SchedulerHints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putSchedulerHints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#create BlockstorageVolumeV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#delete BlockstorageVolumeV3#delete}.

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_id` <a name="reset_backup_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_consistency_group_id` <a name="reset_consistency_group_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetConsistencyGroupId"></a>

```python
def reset_consistency_group_id() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_online_resize` <a name="reset_enable_online_resize" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetEnableOnlineResize"></a>

```python
def reset_enable_online_resize() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_multiattach` <a name="reset_multiattach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMultiattach"></a>

```python
def reset_multiattach() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scheduler_hints` <a name="reset_scheduler_hints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSchedulerHints"></a>

```python
def reset_scheduler_hints() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_source_replica` <a name="reset_source_replica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceReplica"></a>

```python
def reset_source_replica() -> None
```

##### `reset_source_vol_id` <a name="reset_source_vol_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceVolId"></a>

```python
def reset_source_vol_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BlockstorageVolumeV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BlockstorageVolumeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockstorageVolumeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.attachment">attachment</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList">BlockstorageVolumeV3AttachmentList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHints">scheduler_hints</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList">BlockstorageVolumeV3SchedulerHintsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference">BlockstorageVolumeV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupIdInput">consistency_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResizeInput">enable_online_resize_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattachInput">multiattach_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHintsInput">scheduler_hints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplicaInput">source_replica_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolIdInput">source_vol_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupId">consistency_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResize">enable_online_resize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattach">multiattach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplica">source_replica</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolId">source_vol_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.attachment"></a>

```python
attachment: BlockstorageVolumeV3AttachmentList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList">BlockstorageVolumeV3AttachmentList</a>

---

##### `scheduler_hints`<sup>Required</sup> <a name="scheduler_hints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHints"></a>

```python
scheduler_hints: BlockstorageVolumeV3SchedulerHintsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList">BlockstorageVolumeV3SchedulerHintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeouts"></a>

```python
timeouts: BlockstorageVolumeV3TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference">BlockstorageVolumeV3TimeoutsOutputReference</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `consistency_group_id_input`<sup>Optional</sup> <a name="consistency_group_id_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupIdInput"></a>

```python
consistency_group_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_online_resize_input`<sup>Optional</sup> <a name="enable_online_resize_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResizeInput"></a>

```python
enable_online_resize_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `multiattach_input`<sup>Optional</sup> <a name="multiattach_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattachInput"></a>

```python
multiattach_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scheduler_hints_input`<sup>Optional</sup> <a name="scheduler_hints_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHintsInput"></a>

```python
scheduler_hints_input: typing.Union[IResolvable, typing.List[BlockstorageVolumeV3SchedulerHints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `source_replica_input`<sup>Optional</sup> <a name="source_replica_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplicaInput"></a>

```python
source_replica_input: str
```

- *Type:* str

---

##### `source_vol_id_input`<sup>Optional</sup> <a name="source_vol_id_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolIdInput"></a>

```python
source_vol_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BlockstorageVolumeV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `consistency_group_id`<sup>Required</sup> <a name="consistency_group_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupId"></a>

```python
consistency_group_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_online_resize`<sup>Required</sup> <a name="enable_online_resize" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResize"></a>

```python
enable_online_resize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `multiattach`<sup>Required</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattach"></a>

```python
multiattach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `source_replica`<sup>Required</sup> <a name="source_replica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplica"></a>

```python
source_replica: str
```

- *Type:* str

---

##### `source_vol_id`<sup>Required</sup> <a name="source_vol_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolId"></a>

```python
source_vol_id: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageVolumeV3Attachment <a name="BlockstorageVolumeV3Attachment" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3Attachment()
```


### BlockstorageVolumeV3Config <a name="BlockstorageVolumeV3Config" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  size: typing.Union[int, float],
  availability_zone: str = None,
  backup_id: str = None,
  consistency_group_id: str = None,
  description: str = None,
  enable_online_resize: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_id: str = None,
  metadata: typing.Mapping[str] = None,
  multiattach: typing.Union[bool, IResolvable] = None,
  name: str = None,
  region: str = None,
  scheduler_hints: typing.Union[IResolvable, typing.List[BlockstorageVolumeV3SchedulerHints]] = None,
  snapshot_id: str = None,
  source_replica: str = None,
  source_vol_id: str = None,
  timeouts: BlockstorageVolumeV3Timeouts = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#size BlockstorageVolumeV3#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#availability_zone BlockstorageVolumeV3#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#backup_id BlockstorageVolumeV3#backup_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.consistencyGroupId">consistency_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#consistency_group_id BlockstorageVolumeV3#consistency_group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#description BlockstorageVolumeV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.enableOnlineResize">enable_online_resize</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#enable_online_resize BlockstorageVolumeV3#enable_online_resize}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#id BlockstorageVolumeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#image_id BlockstorageVolumeV3#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#metadata BlockstorageVolumeV3#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.multiattach">multiattach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#multiattach BlockstorageVolumeV3#multiattach}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#name BlockstorageVolumeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#region BlockstorageVolumeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.schedulerHints">scheduler_hints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]</code> | scheduler_hints block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#snapshot_id BlockstorageVolumeV3#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceReplica">source_replica</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_replica BlockstorageVolumeV3#source_replica}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceVolId">source_vol_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_vol_id BlockstorageVolumeV3#source_vol_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#volume_type BlockstorageVolumeV3#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#size BlockstorageVolumeV3#size}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#availability_zone BlockstorageVolumeV3#availability_zone}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#backup_id BlockstorageVolumeV3#backup_id}.

---

##### `consistency_group_id`<sup>Optional</sup> <a name="consistency_group_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.consistencyGroupId"></a>

```python
consistency_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#consistency_group_id BlockstorageVolumeV3#consistency_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#description BlockstorageVolumeV3#description}.

---

##### `enable_online_resize`<sup>Optional</sup> <a name="enable_online_resize" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.enableOnlineResize"></a>

```python
enable_online_resize: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#enable_online_resize BlockstorageVolumeV3#enable_online_resize}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#id BlockstorageVolumeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#image_id BlockstorageVolumeV3#image_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#metadata BlockstorageVolumeV3#metadata}.

---

##### `multiattach`<sup>Optional</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.multiattach"></a>

```python
multiattach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#multiattach BlockstorageVolumeV3#multiattach}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#name BlockstorageVolumeV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#region BlockstorageVolumeV3#region}.

---

##### `scheduler_hints`<sup>Optional</sup> <a name="scheduler_hints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.schedulerHints"></a>

```python
scheduler_hints: typing.Union[IResolvable, typing.List[BlockstorageVolumeV3SchedulerHints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]

scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#scheduler_hints BlockstorageVolumeV3#scheduler_hints}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#snapshot_id BlockstorageVolumeV3#snapshot_id}.

---

##### `source_replica`<sup>Optional</sup> <a name="source_replica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceReplica"></a>

```python
source_replica: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_replica BlockstorageVolumeV3#source_replica}.

---

##### `source_vol_id`<sup>Optional</sup> <a name="source_vol_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceVolId"></a>

```python
source_vol_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_vol_id BlockstorageVolumeV3#source_vol_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.timeouts"></a>

```python
timeouts: BlockstorageVolumeV3Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#timeouts BlockstorageVolumeV3#timeouts}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#volume_type BlockstorageVolumeV3#volume_type}.

---

### BlockstorageVolumeV3SchedulerHints <a name="BlockstorageVolumeV3SchedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints(
  additional_properties: typing.Mapping[str] = None,
  different_host: typing.List[str] = None,
  local_to_instance: str = None,
  query: str = None,
  same_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#additional_properties BlockstorageVolumeV3#additional_properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.differentHost">different_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#different_host BlockstorageVolumeV3#different_host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.localToInstance">local_to_instance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#local_to_instance BlockstorageVolumeV3#local_to_instance}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#query BlockstorageVolumeV3#query}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.sameHost">same_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#same_host BlockstorageVolumeV3#same_host}. |

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#additional_properties BlockstorageVolumeV3#additional_properties}.

---

##### `different_host`<sup>Optional</sup> <a name="different_host" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.differentHost"></a>

```python
different_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#different_host BlockstorageVolumeV3#different_host}.

---

##### `local_to_instance`<sup>Optional</sup> <a name="local_to_instance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.localToInstance"></a>

```python
local_to_instance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#local_to_instance BlockstorageVolumeV3#local_to_instance}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#query BlockstorageVolumeV3#query}.

---

##### `same_host`<sup>Optional</sup> <a name="same_host" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.sameHost"></a>

```python
same_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#same_host BlockstorageVolumeV3#same_host}.

---

### BlockstorageVolumeV3Timeouts <a name="BlockstorageVolumeV3Timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#create BlockstorageVolumeV3#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#delete BlockstorageVolumeV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#create BlockstorageVolumeV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#delete BlockstorageVolumeV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageVolumeV3AttachmentList <a name="BlockstorageVolumeV3AttachmentList" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockstorageVolumeV3AttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockstorageVolumeV3AttachmentOutputReference <a name="BlockstorageVolumeV3AttachmentOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment">BlockstorageVolumeV3Attachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.internalValue"></a>

```python
internal_value: BlockstorageVolumeV3Attachment
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment">BlockstorageVolumeV3Attachment</a>

---


### BlockstorageVolumeV3SchedulerHintsList <a name="BlockstorageVolumeV3SchedulerHintsList" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockstorageVolumeV3SchedulerHintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BlockstorageVolumeV3SchedulerHints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]]

---


### BlockstorageVolumeV3SchedulerHintsOutputReference <a name="BlockstorageVolumeV3SchedulerHintsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetDifferentHost">reset_different_host</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetLocalToInstance">reset_local_to_instance</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetSameHost">reset_same_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_different_host` <a name="reset_different_host" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetDifferentHost"></a>

```python
def reset_different_host() -> None
```

##### `reset_local_to_instance` <a name="reset_local_to_instance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetLocalToInstance"></a>

```python
def reset_local_to_instance() -> None
```

##### `reset_query` <a name="reset_query" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_same_host` <a name="reset_same_host" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetSameHost"></a>

```python
def reset_same_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHostInput">different_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstanceInput">local_to_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHostInput">same_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHost">different_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstance">local_to_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHost">same_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `different_host_input`<sup>Optional</sup> <a name="different_host_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHostInput"></a>

```python
different_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_to_instance_input`<sup>Optional</sup> <a name="local_to_instance_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstanceInput"></a>

```python
local_to_instance_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `same_host_input`<sup>Optional</sup> <a name="same_host_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHostInput"></a>

```python
same_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `different_host`<sup>Required</sup> <a name="different_host" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHost"></a>

```python
different_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_to_instance`<sup>Required</sup> <a name="local_to_instance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstance"></a>

```python
local_to_instance: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `same_host`<sup>Required</sup> <a name="same_host" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHost"></a>

```python
same_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BlockstorageVolumeV3SchedulerHints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>]

---


### BlockstorageVolumeV3TimeoutsOutputReference <a name="BlockstorageVolumeV3TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_volume_v3

blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BlockstorageVolumeV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>]

---



