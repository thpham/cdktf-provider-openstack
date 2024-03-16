# `blockstorageQuotasetV3` Submodule <a name="`blockstorageQuotasetV3` Submodule" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageQuotasetV3 <a name="BlockstorageQuotasetV3" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3 openstack_blockstorage_quotaset_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3(
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
  backup_gigabytes: typing.Union[int, float] = None,
  backups: typing.Union[int, float] = None,
  gigabytes: typing.Union[int, float] = None,
  groups: typing.Union[int, float] = None,
  id: str = None,
  per_volume_gigabytes: typing.Union[int, float] = None,
  region: str = None,
  snapshots: typing.Union[int, float] = None,
  timeouts: BlockstorageQuotasetV3Timeouts = None,
  volumes: typing.Union[int, float] = None,
  volume_type_quota: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#project_id BlockstorageQuotasetV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.backupGigabytes">backup_gigabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backup_gigabytes BlockstorageQuotasetV3#backup_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.backups">backups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backups BlockstorageQuotasetV3#backups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.gigabytes">gigabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#gigabytes BlockstorageQuotasetV3#gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.groups">groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#groups BlockstorageQuotasetV3#groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#id BlockstorageQuotasetV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.perVolumeGigabytes">per_volume_gigabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#per_volume_gigabytes BlockstorageQuotasetV3#per_volume_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#region BlockstorageQuotasetV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.snapshots">snapshots</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#snapshots BlockstorageQuotasetV3#snapshots}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.volumes">volumes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volumes BlockstorageQuotasetV3#volumes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.volumeTypeQuota">volume_type_quota</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volume_type_quota BlockstorageQuotasetV3#volume_type_quota}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#project_id BlockstorageQuotasetV3#project_id}.

---

##### `backup_gigabytes`<sup>Optional</sup> <a name="backup_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.backupGigabytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backup_gigabytes BlockstorageQuotasetV3#backup_gigabytes}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.backups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backups BlockstorageQuotasetV3#backups}.

---

##### `gigabytes`<sup>Optional</sup> <a name="gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.gigabytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#gigabytes BlockstorageQuotasetV3#gigabytes}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.groups"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#groups BlockstorageQuotasetV3#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#id BlockstorageQuotasetV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `per_volume_gigabytes`<sup>Optional</sup> <a name="per_volume_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.perVolumeGigabytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#per_volume_gigabytes BlockstorageQuotasetV3#per_volume_gigabytes}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#region BlockstorageQuotasetV3#region}.

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.snapshots"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#snapshots BlockstorageQuotasetV3#snapshots}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#timeouts BlockstorageQuotasetV3#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.volumes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volumes BlockstorageQuotasetV3#volumes}.

---

##### `volume_type_quota`<sup>Optional</sup> <a name="volume_type_quota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.volumeTypeQuota"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volume_type_quota BlockstorageQuotasetV3#volume_type_quota}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackupGigabytes">reset_backup_gigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackups">reset_backups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGigabytes">reset_gigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetPerVolumeGigabytes">reset_per_volume_gigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetSnapshots">reset_snapshots</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumeTypeQuota">reset_volume_type_quota</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#create BlockstorageQuotasetV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#delete BlockstorageQuotasetV3#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#update BlockstorageQuotasetV3#update}.

---

##### `reset_backup_gigabytes` <a name="reset_backup_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackupGigabytes"></a>

```python
def reset_backup_gigabytes() -> None
```

##### `reset_backups` <a name="reset_backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackups"></a>

```python
def reset_backups() -> None
```

##### `reset_gigabytes` <a name="reset_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGigabytes"></a>

```python
def reset_gigabytes() -> None
```

##### `reset_groups` <a name="reset_groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_per_volume_gigabytes` <a name="reset_per_volume_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetPerVolumeGigabytes"></a>

```python
def reset_per_volume_gigabytes() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_snapshots` <a name="reset_snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetSnapshots"></a>

```python
def reset_snapshots() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_volume_type_quota` <a name="reset_volume_type_quota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumeTypeQuota"></a>

```python
def reset_volume_type_quota() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BlockstorageQuotasetV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BlockstorageQuotasetV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BlockstorageQuotasetV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BlockstorageQuotasetV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockstorageQuotasetV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference">BlockstorageQuotasetV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytesInput">backup_gigabytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupsInput">backups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytesInput">gigabytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groupsInput">groups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytesInput">per_volume_gigabytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshotsInput">snapshots_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumesInput">volumes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuotaInput">volume_type_quota_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytes">backup_gigabytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backups">backups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytes">gigabytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groups">groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytes">per_volume_gigabytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshots">snapshots</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumes">volumes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuota">volume_type_quota</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeouts"></a>

```python
timeouts: BlockstorageQuotasetV3TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference">BlockstorageQuotasetV3TimeoutsOutputReference</a>

---

##### `backup_gigabytes_input`<sup>Optional</sup> <a name="backup_gigabytes_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytesInput"></a>

```python
backup_gigabytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backups_input`<sup>Optional</sup> <a name="backups_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupsInput"></a>

```python
backups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gigabytes_input`<sup>Optional</sup> <a name="gigabytes_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytesInput"></a>

```python
gigabytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groupsInput"></a>

```python
groups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `per_volume_gigabytes_input`<sup>Optional</sup> <a name="per_volume_gigabytes_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytesInput"></a>

```python
per_volume_gigabytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `snapshots_input`<sup>Optional</sup> <a name="snapshots_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshotsInput"></a>

```python
snapshots_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BlockstorageQuotasetV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>]

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumesInput"></a>

```python
volumes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_quota_input`<sup>Optional</sup> <a name="volume_type_quota_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuotaInput"></a>

```python
volume_type_quota_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `backup_gigabytes`<sup>Required</sup> <a name="backup_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytes"></a>

```python
backup_gigabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backups`<sup>Required</sup> <a name="backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backups"></a>

```python
backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gigabytes`<sup>Required</sup> <a name="gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytes"></a>

```python
gigabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groups"></a>

```python
groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `per_volume_gigabytes`<sup>Required</sup> <a name="per_volume_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytes"></a>

```python
per_volume_gigabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshots"></a>

```python
snapshots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumes"></a>

```python
volumes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_quota`<sup>Required</sup> <a name="volume_type_quota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuota"></a>

```python
volume_type_quota: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageQuotasetV3Config <a name="BlockstorageQuotasetV3Config" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  backup_gigabytes: typing.Union[int, float] = None,
  backups: typing.Union[int, float] = None,
  gigabytes: typing.Union[int, float] = None,
  groups: typing.Union[int, float] = None,
  id: str = None,
  per_volume_gigabytes: typing.Union[int, float] = None,
  region: str = None,
  snapshots: typing.Union[int, float] = None,
  timeouts: BlockstorageQuotasetV3Timeouts = None,
  volumes: typing.Union[int, float] = None,
  volume_type_quota: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#project_id BlockstorageQuotasetV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backupGigabytes">backup_gigabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backup_gigabytes BlockstorageQuotasetV3#backup_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backups">backups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backups BlockstorageQuotasetV3#backups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.gigabytes">gigabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#gigabytes BlockstorageQuotasetV3#gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.groups">groups</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#groups BlockstorageQuotasetV3#groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#id BlockstorageQuotasetV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.perVolumeGigabytes">per_volume_gigabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#per_volume_gigabytes BlockstorageQuotasetV3#per_volume_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#region BlockstorageQuotasetV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.snapshots">snapshots</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#snapshots BlockstorageQuotasetV3#snapshots}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumes">volumes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volumes BlockstorageQuotasetV3#volumes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumeTypeQuota">volume_type_quota</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volume_type_quota BlockstorageQuotasetV3#volume_type_quota}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#project_id BlockstorageQuotasetV3#project_id}.

---

##### `backup_gigabytes`<sup>Optional</sup> <a name="backup_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backupGigabytes"></a>

```python
backup_gigabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backup_gigabytes BlockstorageQuotasetV3#backup_gigabytes}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backups"></a>

```python
backups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backups BlockstorageQuotasetV3#backups}.

---

##### `gigabytes`<sup>Optional</sup> <a name="gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.gigabytes"></a>

```python
gigabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#gigabytes BlockstorageQuotasetV3#gigabytes}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.groups"></a>

```python
groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#groups BlockstorageQuotasetV3#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#id BlockstorageQuotasetV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `per_volume_gigabytes`<sup>Optional</sup> <a name="per_volume_gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.perVolumeGigabytes"></a>

```python
per_volume_gigabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#per_volume_gigabytes BlockstorageQuotasetV3#per_volume_gigabytes}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#region BlockstorageQuotasetV3#region}.

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.snapshots"></a>

```python
snapshots: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#snapshots BlockstorageQuotasetV3#snapshots}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.timeouts"></a>

```python
timeouts: BlockstorageQuotasetV3Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#timeouts BlockstorageQuotasetV3#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumes"></a>

```python
volumes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volumes BlockstorageQuotasetV3#volumes}.

---

##### `volume_type_quota`<sup>Optional</sup> <a name="volume_type_quota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumeTypeQuota"></a>

```python
volume_type_quota: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volume_type_quota BlockstorageQuotasetV3#volume_type_quota}.

---

### BlockstorageQuotasetV3Timeouts <a name="BlockstorageQuotasetV3Timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#create BlockstorageQuotasetV3#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#delete BlockstorageQuotasetV3#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#update BlockstorageQuotasetV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#create BlockstorageQuotasetV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#delete BlockstorageQuotasetV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#update BlockstorageQuotasetV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageQuotasetV3TimeoutsOutputReference <a name="BlockstorageQuotasetV3TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import blockstorage_quotaset_v3

blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BlockstorageQuotasetV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>]

---



