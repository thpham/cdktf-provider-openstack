# `objectstorageContainerV1` Submodule <a name="`objectstorageContainerV1` Submodule" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageContainerV1 <a name="ObjectstorageContainerV1" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1 openstack_objectstorage_container_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1(
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
  container_read: str = None,
  container_sync_key: str = None,
  container_sync_to: str = None,
  container_write: str = None,
  content_type: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  region: str = None,
  storage_policy: str = None,
  versioning: typing.Union[bool, IResolvable] = None,
  versioning_legacy: ObjectstorageContainerV1VersioningLegacy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#name ObjectstorageContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerRead">container_read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_read ObjectstorageContainerV1#container_read}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerSyncKey">container_sync_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_key ObjectstorageContainerV1#container_sync_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerSyncTo">container_sync_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_to ObjectstorageContainerV1#container_sync_to}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerWrite">container_write</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_write ObjectstorageContainerV1#container_write}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#content_type ObjectstorageContainerV1#content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#force_destroy ObjectstorageContainerV1#force_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#id ObjectstorageContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#metadata ObjectstorageContainerV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#region ObjectstorageContainerV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.storagePolicy">storage_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#storage_policy ObjectstorageContainerV1#storage_policy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.versioning">versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning ObjectstorageContainerV1#versioning}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.versioningLegacy">versioning_legacy</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a></code> | versioning_legacy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#name ObjectstorageContainerV1#name}.

---

##### `container_read`<sup>Optional</sup> <a name="container_read" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerRead"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_read ObjectstorageContainerV1#container_read}.

---

##### `container_sync_key`<sup>Optional</sup> <a name="container_sync_key" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerSyncKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_key ObjectstorageContainerV1#container_sync_key}.

---

##### `container_sync_to`<sup>Optional</sup> <a name="container_sync_to" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerSyncTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_to ObjectstorageContainerV1#container_sync_to}.

---

##### `container_write`<sup>Optional</sup> <a name="container_write" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.containerWrite"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_write ObjectstorageContainerV1#container_write}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#content_type ObjectstorageContainerV1#content_type}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#force_destroy ObjectstorageContainerV1#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#id ObjectstorageContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#metadata ObjectstorageContainerV1#metadata}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#region ObjectstorageContainerV1#region}.

---

##### `storage_policy`<sup>Optional</sup> <a name="storage_policy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.storagePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#storage_policy ObjectstorageContainerV1#storage_policy}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.versioning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning ObjectstorageContainerV1#versioning}.

---

##### `versioning_legacy`<sup>Optional</sup> <a name="versioning_legacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.versioningLegacy"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

versioning_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning_legacy ObjectstorageContainerV1#versioning_legacy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.putVersioningLegacy">put_versioning_legacy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerRead">reset_container_read</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncKey">reset_container_sync_key</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncTo">reset_container_sync_to</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerWrite">reset_container_write</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetStoragePolicy">reset_storage_policy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioning">reset_versioning</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioningLegacy">reset_versioning_legacy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_versioning_legacy` <a name="put_versioning_legacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.putVersioningLegacy"></a>

```python
def put_versioning_legacy(
  location: str,
  type: str
) -> None
```

###### `location`<sup>Required</sup> <a name="location" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.putVersioningLegacy.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#location ObjectstorageContainerV1#location}.

---

###### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.putVersioningLegacy.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#type ObjectstorageContainerV1#type}.

---

##### `reset_container_read` <a name="reset_container_read" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerRead"></a>

```python
def reset_container_read() -> None
```

##### `reset_container_sync_key` <a name="reset_container_sync_key" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncKey"></a>

```python
def reset_container_sync_key() -> None
```

##### `reset_container_sync_to` <a name="reset_container_sync_to" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncTo"></a>

```python
def reset_container_sync_to() -> None
```

##### `reset_container_write` <a name="reset_container_write" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerWrite"></a>

```python
def reset_container_write() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_storage_policy` <a name="reset_storage_policy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetStoragePolicy"></a>

```python
def reset_storage_policy() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioning"></a>

```python
def reset_versioning() -> None
```

##### `reset_versioning_legacy` <a name="reset_versioning_legacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioningLegacy"></a>

```python
def reset_versioning_legacy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObjectstorageContainerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObjectstorageContainerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObjectstorageContainerV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObjectstorageContainerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageContainerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacy">versioning_legacy</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference">ObjectstorageContainerV1VersioningLegacyOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerReadInput">container_read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKeyInput">container_sync_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncToInput">container_sync_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWriteInput">container_write_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicyInput">storage_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningInput">versioning_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacyInput">versioning_legacy_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerRead">container_read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKey">container_sync_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncTo">container_sync_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWrite">container_write</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicy">storage_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioning">versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `versioning_legacy`<sup>Required</sup> <a name="versioning_legacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacy"></a>

```python
versioning_legacy: ObjectstorageContainerV1VersioningLegacyOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference">ObjectstorageContainerV1VersioningLegacyOutputReference</a>

---

##### `container_read_input`<sup>Optional</sup> <a name="container_read_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerReadInput"></a>

```python
container_read_input: str
```

- *Type:* str

---

##### `container_sync_key_input`<sup>Optional</sup> <a name="container_sync_key_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKeyInput"></a>

```python
container_sync_key_input: str
```

- *Type:* str

---

##### `container_sync_to_input`<sup>Optional</sup> <a name="container_sync_to_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncToInput"></a>

```python
container_sync_to_input: str
```

- *Type:* str

---

##### `container_write_input`<sup>Optional</sup> <a name="container_write_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWriteInput"></a>

```python
container_write_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `storage_policy_input`<sup>Optional</sup> <a name="storage_policy_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicyInput"></a>

```python
storage_policy_input: str
```

- *Type:* str

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningInput"></a>

```python
versioning_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `versioning_legacy_input`<sup>Optional</sup> <a name="versioning_legacy_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacyInput"></a>

```python
versioning_legacy_input: ObjectstorageContainerV1VersioningLegacy
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

---

##### `container_read`<sup>Required</sup> <a name="container_read" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerRead"></a>

```python
container_read: str
```

- *Type:* str

---

##### `container_sync_key`<sup>Required</sup> <a name="container_sync_key" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKey"></a>

```python
container_sync_key: str
```

- *Type:* str

---

##### `container_sync_to`<sup>Required</sup> <a name="container_sync_to" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncTo"></a>

```python
container_sync_to: str
```

- *Type:* str

---

##### `container_write`<sup>Required</sup> <a name="container_write" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWrite"></a>

```python
container_write: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `storage_policy`<sup>Required</sup> <a name="storage_policy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicy"></a>

```python
storage_policy: str
```

- *Type:* str

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioning"></a>

```python
versioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageContainerV1Config <a name="ObjectstorageContainerV1Config" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  container_read: str = None,
  container_sync_key: str = None,
  container_sync_to: str = None,
  container_write: str = None,
  content_type: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  region: str = None,
  storage_policy: str = None,
  versioning: typing.Union[bool, IResolvable] = None,
  versioning_legacy: ObjectstorageContainerV1VersioningLegacy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#name ObjectstorageContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerRead">container_read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_read ObjectstorageContainerV1#container_read}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncKey">container_sync_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_key ObjectstorageContainerV1#container_sync_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncTo">container_sync_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_to ObjectstorageContainerV1#container_sync_to}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerWrite">container_write</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_write ObjectstorageContainerV1#container_write}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#content_type ObjectstorageContainerV1#content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#force_destroy ObjectstorageContainerV1#force_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#id ObjectstorageContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#metadata ObjectstorageContainerV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#region ObjectstorageContainerV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.storagePolicy">storage_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#storage_policy ObjectstorageContainerV1#storage_policy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioning">versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning ObjectstorageContainerV1#versioning}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioningLegacy">versioning_legacy</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a></code> | versioning_legacy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#name ObjectstorageContainerV1#name}.

---

##### `container_read`<sup>Optional</sup> <a name="container_read" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerRead"></a>

```python
container_read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_read ObjectstorageContainerV1#container_read}.

---

##### `container_sync_key`<sup>Optional</sup> <a name="container_sync_key" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncKey"></a>

```python
container_sync_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_key ObjectstorageContainerV1#container_sync_key}.

---

##### `container_sync_to`<sup>Optional</sup> <a name="container_sync_to" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncTo"></a>

```python
container_sync_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_to ObjectstorageContainerV1#container_sync_to}.

---

##### `container_write`<sup>Optional</sup> <a name="container_write" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerWrite"></a>

```python
container_write: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_write ObjectstorageContainerV1#container_write}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#content_type ObjectstorageContainerV1#content_type}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#force_destroy ObjectstorageContainerV1#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#id ObjectstorageContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#metadata ObjectstorageContainerV1#metadata}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#region ObjectstorageContainerV1#region}.

---

##### `storage_policy`<sup>Optional</sup> <a name="storage_policy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.storagePolicy"></a>

```python
storage_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#storage_policy ObjectstorageContainerV1#storage_policy}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioning"></a>

```python
versioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning ObjectstorageContainerV1#versioning}.

---

##### `versioning_legacy`<sup>Optional</sup> <a name="versioning_legacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioningLegacy"></a>

```python
versioning_legacy: ObjectstorageContainerV1VersioningLegacy
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

versioning_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning_legacy ObjectstorageContainerV1#versioning_legacy}

---

### ObjectstorageContainerV1VersioningLegacy <a name="ObjectstorageContainerV1VersioningLegacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy(
  location: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#location ObjectstorageContainerV1#location}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#type ObjectstorageContainerV1#type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#location ObjectstorageContainerV1#location}.

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#type ObjectstorageContainerV1#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageContainerV1VersioningLegacyOutputReference <a name="ObjectstorageContainerV1VersioningLegacyOutputReference" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_container_v1

objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.internalValue"></a>

```python
internal_value: ObjectstorageContainerV1VersioningLegacy
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

---



