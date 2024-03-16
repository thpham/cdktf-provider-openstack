# `objectstorageObjectV1` Submodule <a name="`objectstorageObjectV1` Submodule" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObjectV1 <a name="ObjectstorageObjectV1" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1 openstack_objectstorage_object_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_object_v1

objectstorageObjectV1.ObjectstorageObjectV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  name: str,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_type: str = None,
  copy_from: str = None,
  delete_after: typing.Union[int, float] = None,
  delete_at: str = None,
  detect_content_type: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  object_manifest: str = None,
  region: str = None,
  source: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#container_name ObjectstorageObjectV1#container_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#name ObjectstorageObjectV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content ObjectstorageObjectV1#content}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_disposition ObjectstorageObjectV1#content_disposition}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_encoding ObjectstorageObjectV1#content_encoding}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_type ObjectstorageObjectV1#content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.copyFrom">copy_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#copy_from ObjectstorageObjectV1#copy_from}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.deleteAfter">delete_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_after ObjectstorageObjectV1#delete_after}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.deleteAt">delete_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_at ObjectstorageObjectV1#delete_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.detectContentType">detect_content_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#detect_content_type ObjectstorageObjectV1#detect_content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#etag ObjectstorageObjectV1#etag}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#id ObjectstorageObjectV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#metadata ObjectstorageObjectV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.objectManifest">object_manifest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#object_manifest ObjectstorageObjectV1#object_manifest}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#region ObjectstorageObjectV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#source ObjectstorageObjectV1#source}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#container_name ObjectstorageObjectV1#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#name ObjectstorageObjectV1#name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content ObjectstorageObjectV1#content}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_disposition ObjectstorageObjectV1#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_encoding ObjectstorageObjectV1#content_encoding}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_type ObjectstorageObjectV1#content_type}.

---

##### `copy_from`<sup>Optional</sup> <a name="copy_from" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.copyFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#copy_from ObjectstorageObjectV1#copy_from}.

---

##### `delete_after`<sup>Optional</sup> <a name="delete_after" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.deleteAfter"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_after ObjectstorageObjectV1#delete_after}.

---

##### `delete_at`<sup>Optional</sup> <a name="delete_at" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.deleteAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_at ObjectstorageObjectV1#delete_at}.

---

##### `detect_content_type`<sup>Optional</sup> <a name="detect_content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.detectContentType"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#detect_content_type ObjectstorageObjectV1#detect_content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#etag ObjectstorageObjectV1#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#id ObjectstorageObjectV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#metadata ObjectstorageObjectV1#metadata}.

---

##### `object_manifest`<sup>Optional</sup> <a name="object_manifest" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.objectManifest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#object_manifest ObjectstorageObjectV1#object_manifest}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#region ObjectstorageObjectV1#region}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#source ObjectstorageObjectV1#source}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetCopyFrom">reset_copy_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAfter">reset_delete_after</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAt">reset_delete_at</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDetectContentType">reset_detect_content_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetObjectManifest">reset_object_manifest</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_content` <a name="reset_content" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_copy_from` <a name="reset_copy_from" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetCopyFrom"></a>

```python
def reset_copy_from() -> None
```

##### `reset_delete_after` <a name="reset_delete_after" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAfter"></a>

```python
def reset_delete_after() -> None
```

##### `reset_delete_at` <a name="reset_delete_at" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAt"></a>

```python
def reset_delete_at() -> None
```

##### `reset_detect_content_type` <a name="reset_detect_content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDetectContentType"></a>

```python
def reset_detect_content_type() -> None
```

##### `reset_etag` <a name="reset_etag" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_object_manifest` <a name="reset_object_manifest" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetObjectManifest"></a>

```python
def reset_object_manifest() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_source` <a name="reset_source" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObjectstorageObjectV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_object_v1

objectstorageObjectV1.ObjectstorageObjectV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_object_v1

objectstorageObjectV1.ObjectstorageObjectV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_object_v1

objectstorageObjectV1.ObjectstorageObjectV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_object_v1

objectstorageObjectV1.ObjectstorageObjectV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObjectstorageObjectV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObjectstorageObjectV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObjectstorageObjectV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObjectV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentLength">content_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.transId">trans_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFromInput">copy_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfterInput">delete_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAtInput">delete_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentTypeInput">detect_content_type_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifestInput">object_manifest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFrom">copy_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfter">delete_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAt">delete_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentType">detect_content_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifest">object_manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentLength"></a>

```python
content_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date`<sup>Required</sup> <a name="date" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `trans_id`<sup>Required</sup> <a name="trans_id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.transId"></a>

```python
trans_id: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `copy_from_input`<sup>Optional</sup> <a name="copy_from_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFromInput"></a>

```python
copy_from_input: str
```

- *Type:* str

---

##### `delete_after_input`<sup>Optional</sup> <a name="delete_after_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfterInput"></a>

```python
delete_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_at_input`<sup>Optional</sup> <a name="delete_at_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAtInput"></a>

```python
delete_at_input: str
```

- *Type:* str

---

##### `detect_content_type_input`<sup>Optional</sup> <a name="detect_content_type_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentTypeInput"></a>

```python
detect_content_type_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_manifest_input`<sup>Optional</sup> <a name="object_manifest_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifestInput"></a>

```python
object_manifest_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `copy_from`<sup>Required</sup> <a name="copy_from" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFrom"></a>

```python
copy_from: str
```

- *Type:* str

---

##### `delete_after`<sup>Required</sup> <a name="delete_after" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfter"></a>

```python
delete_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_at`<sup>Required</sup> <a name="delete_at" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAt"></a>

```python
delete_at: str
```

- *Type:* str

---

##### `detect_content_type`<sup>Required</sup> <a name="detect_content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentType"></a>

```python
detect_content_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_manifest`<sup>Required</sup> <a name="object_manifest" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifest"></a>

```python
object_manifest: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectV1Config <a name="ObjectstorageObjectV1Config" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import objectstorage_object_v1

objectstorageObjectV1.ObjectstorageObjectV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  name: str,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_type: str = None,
  copy_from: str = None,
  delete_after: typing.Union[int, float] = None,
  delete_at: str = None,
  detect_content_type: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  object_manifest: str = None,
  region: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#container_name ObjectstorageObjectV1#container_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#name ObjectstorageObjectV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content ObjectstorageObjectV1#content}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_disposition ObjectstorageObjectV1#content_disposition}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_encoding ObjectstorageObjectV1#content_encoding}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_type ObjectstorageObjectV1#content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.copyFrom">copy_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#copy_from ObjectstorageObjectV1#copy_from}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAfter">delete_after</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_after ObjectstorageObjectV1#delete_after}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAt">delete_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_at ObjectstorageObjectV1#delete_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.detectContentType">detect_content_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#detect_content_type ObjectstorageObjectV1#detect_content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#etag ObjectstorageObjectV1#etag}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#id ObjectstorageObjectV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#metadata ObjectstorageObjectV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.objectManifest">object_manifest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#object_manifest ObjectstorageObjectV1#object_manifest}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#region ObjectstorageObjectV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#source ObjectstorageObjectV1#source}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#container_name ObjectstorageObjectV1#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#name ObjectstorageObjectV1#name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content ObjectstorageObjectV1#content}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_disposition ObjectstorageObjectV1#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_encoding ObjectstorageObjectV1#content_encoding}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_type ObjectstorageObjectV1#content_type}.

---

##### `copy_from`<sup>Optional</sup> <a name="copy_from" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.copyFrom"></a>

```python
copy_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#copy_from ObjectstorageObjectV1#copy_from}.

---

##### `delete_after`<sup>Optional</sup> <a name="delete_after" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAfter"></a>

```python
delete_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_after ObjectstorageObjectV1#delete_after}.

---

##### `delete_at`<sup>Optional</sup> <a name="delete_at" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAt"></a>

```python
delete_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_at ObjectstorageObjectV1#delete_at}.

---

##### `detect_content_type`<sup>Optional</sup> <a name="detect_content_type" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.detectContentType"></a>

```python
detect_content_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#detect_content_type ObjectstorageObjectV1#detect_content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#etag ObjectstorageObjectV1#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#id ObjectstorageObjectV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#metadata ObjectstorageObjectV1#metadata}.

---

##### `object_manifest`<sup>Optional</sup> <a name="object_manifest" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.objectManifest"></a>

```python
object_manifest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#object_manifest ObjectstorageObjectV1#object_manifest}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#region ObjectstorageObjectV1#region}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#source ObjectstorageObjectV1#source}.

---



