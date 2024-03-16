# `imagesImageV2` Submodule <a name="`imagesImageV2` Submodule" id="@ithings/cdktf-provider-openstack.imagesImageV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagesImageV2 <a name="ImagesImageV2" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2 openstack_images_image_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_format: str,
  disk_format: str,
  name: str,
  decompress: typing.Union[bool, IResolvable] = None,
  hidden: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_cache_path: str = None,
  image_id: str = None,
  image_source_password: str = None,
  image_source_url: str = None,
  image_source_username: str = None,
  local_file_path: str = None,
  min_disk_gb: typing.Union[int, float] = None,
  min_ram_mb: typing.Union[int, float] = None,
  properties: typing.Mapping[str] = None,
  protected: typing.Union[bool, IResolvable] = None,
  region: str = None,
  tags: typing.List[str] = None,
  timeouts: ImagesImageV2Timeouts = None,
  verify_checksum: typing.Union[bool, IResolvable] = None,
  visibility: str = None,
  web_download: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.containerFormat">container_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.diskFormat">disk_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#name ImagesImageV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.decompress">decompress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#decompress ImagesImageV2#decompress}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#hidden ImagesImageV2#hidden}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#id ImagesImageV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageCachePath">image_cache_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_id ImagesImageV2#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageSourcePassword">image_source_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_password ImagesImageV2#image_source_password}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageSourceUrl">image_source_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageSourceUsername">image_source_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_username ImagesImageV2#image_source_username}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.localFilePath">local_file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.minDiskGb">min_disk_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.minRamMb">min_ram_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#properties ImagesImageV2#properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.protected">protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#protected ImagesImageV2#protected}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#region ImagesImageV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#tags ImagesImageV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.verifyChecksum">verify_checksum</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#verify_checksum ImagesImageV2#verify_checksum}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.webDownload">web_download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#web_download ImagesImageV2#web_download}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_format`<sup>Required</sup> <a name="container_format" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.containerFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}.

---

##### `disk_format`<sup>Required</sup> <a name="disk_format" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.diskFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#name ImagesImageV2#name}.

---

##### `decompress`<sup>Optional</sup> <a name="decompress" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.decompress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#decompress ImagesImageV2#decompress}.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.hidden"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#hidden ImagesImageV2#hidden}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#id ImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_cache_path`<sup>Optional</sup> <a name="image_cache_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageCachePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_id ImagesImageV2#image_id}.

---

##### `image_source_password`<sup>Optional</sup> <a name="image_source_password" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageSourcePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_password ImagesImageV2#image_source_password}.

---

##### `image_source_url`<sup>Optional</sup> <a name="image_source_url" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageSourceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}.

---

##### `image_source_username`<sup>Optional</sup> <a name="image_source_username" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.imageSourceUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_username ImagesImageV2#image_source_username}.

---

##### `local_file_path`<sup>Optional</sup> <a name="local_file_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.localFilePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}.

---

##### `min_disk_gb`<sup>Optional</sup> <a name="min_disk_gb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.minDiskGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}.

---

##### `min_ram_mb`<sup>Optional</sup> <a name="min_ram_mb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.minRamMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#properties ImagesImageV2#properties}.

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.protected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#protected ImagesImageV2#protected}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#region ImagesImageV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#tags ImagesImageV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#timeouts ImagesImageV2#timeouts}

---

##### `verify_checksum`<sup>Optional</sup> <a name="verify_checksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.verifyChecksum"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#verify_checksum ImagesImageV2#verify_checksum}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.visibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}.

---

##### `web_download`<sup>Optional</sup> <a name="web_download" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.webDownload"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#web_download ImagesImageV2#web_download}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetDecompress">reset_decompress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetHidden">reset_hidden</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageCachePath">reset_image_cache_path</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourcePassword">reset_image_source_password</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUrl">reset_image_source_url</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUsername">reset_image_source_username</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetLocalFilePath">reset_local_file_path</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinDiskGb">reset_min_disk_gb</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinRamMb">reset_min_ram_mb</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProtected">reset_protected</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVerifyChecksum">reset_verify_checksum</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVisibility">reset_visibility</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetWebDownload">reset_web_download</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#create ImagesImageV2#create}.

---

##### `reset_decompress` <a name="reset_decompress" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetDecompress"></a>

```python
def reset_decompress() -> None
```

##### `reset_hidden` <a name="reset_hidden" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetHidden"></a>

```python
def reset_hidden() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_cache_path` <a name="reset_image_cache_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageCachePath"></a>

```python
def reset_image_cache_path() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_image_source_password` <a name="reset_image_source_password" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourcePassword"></a>

```python
def reset_image_source_password() -> None
```

##### `reset_image_source_url` <a name="reset_image_source_url" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUrl"></a>

```python
def reset_image_source_url() -> None
```

##### `reset_image_source_username` <a name="reset_image_source_username" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUsername"></a>

```python
def reset_image_source_username() -> None
```

##### `reset_local_file_path` <a name="reset_local_file_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetLocalFilePath"></a>

```python
def reset_local_file_path() -> None
```

##### `reset_min_disk_gb` <a name="reset_min_disk_gb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinDiskGb"></a>

```python
def reset_min_disk_gb() -> None
```

##### `reset_min_ram_mb` <a name="reset_min_ram_mb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinRamMb"></a>

```python
def reset_min_ram_mb() -> None
```

##### `reset_properties` <a name="reset_properties" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_protected` <a name="reset_protected" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProtected"></a>

```python
def reset_protected() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_verify_checksum` <a name="reset_verify_checksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVerifyChecksum"></a>

```python
def reset_verify_checksum() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVisibility"></a>

```python
def reset_visibility() -> None
```

##### `reset_web_download` <a name="reset_web_download" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetWebDownload"></a>

```python
def reset_web_download() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ImagesImageV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ImagesImageV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagesImageV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagesImageV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ImagesImageV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updateAt">update_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormatInput">container_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompressInput">decompress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormatInput">disk_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hiddenInput">hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePathInput">image_cache_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePasswordInput">image_source_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput">image_source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsernameInput">image_source_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePathInput">local_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGbInput">min_disk_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMbInput">min_ram_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protectedInput">protected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksumInput">verify_checksum_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownloadInput">web_download_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormat">container_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompress">decompress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormat">disk_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePath">image_cache_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePassword">image_source_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrl">image_source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsername">image_source_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePath">local_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGb">min_disk_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMb">min_ram_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protected">protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksum">verify_checksum</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownload">web_download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `owner`<sup>Required</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeouts"></a>

```python
timeouts: ImagesImageV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a>

---

##### `update_at`<sup>Required</sup> <a name="update_at" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updateAt"></a>

```python
update_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `container_format_input`<sup>Optional</sup> <a name="container_format_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormatInput"></a>

```python
container_format_input: str
```

- *Type:* str

---

##### `decompress_input`<sup>Optional</sup> <a name="decompress_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompressInput"></a>

```python
decompress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_format_input`<sup>Optional</sup> <a name="disk_format_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormatInput"></a>

```python
disk_format_input: str
```

- *Type:* str

---

##### `hidden_input`<sup>Optional</sup> <a name="hidden_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hiddenInput"></a>

```python
hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_cache_path_input`<sup>Optional</sup> <a name="image_cache_path_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePathInput"></a>

```python
image_cache_path_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `image_source_password_input`<sup>Optional</sup> <a name="image_source_password_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePasswordInput"></a>

```python
image_source_password_input: str
```

- *Type:* str

---

##### `image_source_url_input`<sup>Optional</sup> <a name="image_source_url_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput"></a>

```python
image_source_url_input: str
```

- *Type:* str

---

##### `image_source_username_input`<sup>Optional</sup> <a name="image_source_username_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsernameInput"></a>

```python
image_source_username_input: str
```

- *Type:* str

---

##### `local_file_path_input`<sup>Optional</sup> <a name="local_file_path_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePathInput"></a>

```python
local_file_path_input: str
```

- *Type:* str

---

##### `min_disk_gb_input`<sup>Optional</sup> <a name="min_disk_gb_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGbInput"></a>

```python
min_disk_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ram_mb_input`<sup>Optional</sup> <a name="min_ram_mb_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMbInput"></a>

```python
min_ram_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `protected_input`<sup>Optional</sup> <a name="protected_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protectedInput"></a>

```python
protected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ImagesImageV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>]

---

##### `verify_checksum_input`<sup>Optional</sup> <a name="verify_checksum_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksumInput"></a>

```python
verify_checksum_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `web_download_input`<sup>Optional</sup> <a name="web_download_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownloadInput"></a>

```python
web_download_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_format`<sup>Required</sup> <a name="container_format" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormat"></a>

```python
container_format: str
```

- *Type:* str

---

##### `decompress`<sup>Required</sup> <a name="decompress" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompress"></a>

```python
decompress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_format`<sup>Required</sup> <a name="disk_format" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormat"></a>

```python
disk_format: str
```

- *Type:* str

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_cache_path`<sup>Required</sup> <a name="image_cache_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePath"></a>

```python
image_cache_path: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_source_password`<sup>Required</sup> <a name="image_source_password" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePassword"></a>

```python
image_source_password: str
```

- *Type:* str

---

##### `image_source_url`<sup>Required</sup> <a name="image_source_url" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrl"></a>

```python
image_source_url: str
```

- *Type:* str

---

##### `image_source_username`<sup>Required</sup> <a name="image_source_username" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsername"></a>

```python
image_source_username: str
```

- *Type:* str

---

##### `local_file_path`<sup>Required</sup> <a name="local_file_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePath"></a>

```python
local_file_path: str
```

- *Type:* str

---

##### `min_disk_gb`<sup>Required</sup> <a name="min_disk_gb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGb"></a>

```python
min_disk_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ram_mb`<sup>Required</sup> <a name="min_ram_mb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMb"></a>

```python
min_ram_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `protected`<sup>Required</sup> <a name="protected" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protected"></a>

```python
protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_checksum`<sup>Required</sup> <a name="verify_checksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksum"></a>

```python
verify_checksum: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `web_download`<sup>Required</sup> <a name="web_download" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownload"></a>

```python
web_download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagesImageV2Config <a name="ImagesImageV2Config" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_format: str,
  disk_format: str,
  name: str,
  decompress: typing.Union[bool, IResolvable] = None,
  hidden: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_cache_path: str = None,
  image_id: str = None,
  image_source_password: str = None,
  image_source_url: str = None,
  image_source_username: str = None,
  local_file_path: str = None,
  min_disk_gb: typing.Union[int, float] = None,
  min_ram_mb: typing.Union[int, float] = None,
  properties: typing.Mapping[str] = None,
  protected: typing.Union[bool, IResolvable] = None,
  region: str = None,
  tags: typing.List[str] = None,
  timeouts: ImagesImageV2Timeouts = None,
  verify_checksum: typing.Union[bool, IResolvable] = None,
  visibility: str = None,
  web_download: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.containerFormat">container_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.diskFormat">disk_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#name ImagesImageV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.decompress">decompress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#decompress ImagesImageV2#decompress}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#hidden ImagesImageV2#hidden}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#id ImagesImageV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageCachePath">image_cache_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_id ImagesImageV2#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourcePassword">image_source_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_password ImagesImageV2#image_source_password}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl">image_source_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUsername">image_source_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_username ImagesImageV2#image_source_username}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.localFilePath">local_file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minDiskGb">min_disk_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minRamMb">min_ram_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#properties ImagesImageV2#properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.protected">protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#protected ImagesImageV2#protected}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#region ImagesImageV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#tags ImagesImageV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.verifyChecksum">verify_checksum</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#verify_checksum ImagesImageV2#verify_checksum}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.webDownload">web_download</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#web_download ImagesImageV2#web_download}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_format`<sup>Required</sup> <a name="container_format" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.containerFormat"></a>

```python
container_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}.

---

##### `disk_format`<sup>Required</sup> <a name="disk_format" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.diskFormat"></a>

```python
disk_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#name ImagesImageV2#name}.

---

##### `decompress`<sup>Optional</sup> <a name="decompress" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.decompress"></a>

```python
decompress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#decompress ImagesImageV2#decompress}.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#hidden ImagesImageV2#hidden}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#id ImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_cache_path`<sup>Optional</sup> <a name="image_cache_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageCachePath"></a>

```python
image_cache_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_id ImagesImageV2#image_id}.

---

##### `image_source_password`<sup>Optional</sup> <a name="image_source_password" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourcePassword"></a>

```python
image_source_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_password ImagesImageV2#image_source_password}.

---

##### `image_source_url`<sup>Optional</sup> <a name="image_source_url" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl"></a>

```python
image_source_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}.

---

##### `image_source_username`<sup>Optional</sup> <a name="image_source_username" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUsername"></a>

```python
image_source_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_username ImagesImageV2#image_source_username}.

---

##### `local_file_path`<sup>Optional</sup> <a name="local_file_path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.localFilePath"></a>

```python
local_file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}.

---

##### `min_disk_gb`<sup>Optional</sup> <a name="min_disk_gb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minDiskGb"></a>

```python
min_disk_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}.

---

##### `min_ram_mb`<sup>Optional</sup> <a name="min_ram_mb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minRamMb"></a>

```python
min_ram_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#properties ImagesImageV2#properties}.

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.protected"></a>

```python
protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#protected ImagesImageV2#protected}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#region ImagesImageV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#tags ImagesImageV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.timeouts"></a>

```python
timeouts: ImagesImageV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#timeouts ImagesImageV2#timeouts}

---

##### `verify_checksum`<sup>Optional</sup> <a name="verify_checksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.verifyChecksum"></a>

```python
verify_checksum: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#verify_checksum ImagesImageV2#verify_checksum}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}.

---

##### `web_download`<sup>Optional</sup> <a name="web_download" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.webDownload"></a>

```python
web_download: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#web_download ImagesImageV2#web_download}.

---

### ImagesImageV2Timeouts <a name="ImagesImageV2Timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2Timeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#create ImagesImageV2#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#create ImagesImageV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagesImageV2TimeoutsOutputReference <a name="ImagesImageV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import images_image_v2

imagesImageV2.ImagesImageV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ImagesImageV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>]

---



