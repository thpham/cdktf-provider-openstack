# `dataOpenstackBlockstorageVolumeV3` Submodule <a name="`dataOpenstackBlockstorageVolumeV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackBlockstorageVolumeV3 <a name="DataOpenstackBlockstorageVolumeV3" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3 openstack_blockstorage_volume_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bootable: str = None,
  host: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  name: str = None,
  region: str = None,
  status: str = None,
  volume_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.bootable">bootable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#bootable DataOpenstackBlockstorageVolumeV3#bootable}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#host DataOpenstackBlockstorageVolumeV3#host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#id DataOpenstackBlockstorageVolumeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#metadata DataOpenstackBlockstorageVolumeV3#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#name DataOpenstackBlockstorageVolumeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#region DataOpenstackBlockstorageVolumeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#status DataOpenstackBlockstorageVolumeV3#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#volume_type DataOpenstackBlockstorageVolumeV3#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.bootable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#bootable DataOpenstackBlockstorageVolumeV3#bootable}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#host DataOpenstackBlockstorageVolumeV3#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#id DataOpenstackBlockstorageVolumeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#metadata DataOpenstackBlockstorageVolumeV3#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#name DataOpenstackBlockstorageVolumeV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#region DataOpenstackBlockstorageVolumeV3#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#status DataOpenstackBlockstorageVolumeV3#status}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#volume_type DataOpenstackBlockstorageVolumeV3#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetBootable">reset_bootable</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_bootable` <a name="reset_bootable" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetBootable"></a>

```python
def reset_bootable() -> None
```

##### `reset_host` <a name="reset_host" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackBlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackBlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackBlockstorageVolumeV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackBlockstorageVolumeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackBlockstorageVolumeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.attachment">attachment</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList">DataOpenstackBlockstorageVolumeV3AttachmentList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.multiattach">multiattach</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.sourceVolumeId">source_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootableInput">bootable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootable">bootable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.attachment"></a>

```python
attachment: DataOpenstackBlockstorageVolumeV3AttachmentList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList">DataOpenstackBlockstorageVolumeV3AttachmentList</a>

---

##### `multiattach`<sup>Required</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.multiattach"></a>

```python
multiattach: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_volume_id`<sup>Required</sup> <a name="source_volume_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.sourceVolumeId"></a>

```python
source_volume_id: str
```

- *Type:* str

---

##### `bootable_input`<sup>Optional</sup> <a name="bootable_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootableInput"></a>

```python
bootable_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootable"></a>

```python
bootable: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackBlockstorageVolumeV3Attachment <a name="DataOpenstackBlockstorageVolumeV3Attachment" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment()
```


### DataOpenstackBlockstorageVolumeV3Config <a name="DataOpenstackBlockstorageVolumeV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bootable: str = None,
  host: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  name: str = None,
  region: str = None,
  status: str = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.bootable">bootable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#bootable DataOpenstackBlockstorageVolumeV3#bootable}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#host DataOpenstackBlockstorageVolumeV3#host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#id DataOpenstackBlockstorageVolumeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#metadata DataOpenstackBlockstorageVolumeV3#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#name DataOpenstackBlockstorageVolumeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#region DataOpenstackBlockstorageVolumeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#status DataOpenstackBlockstorageVolumeV3#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#volume_type DataOpenstackBlockstorageVolumeV3#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.bootable"></a>

```python
bootable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#bootable DataOpenstackBlockstorageVolumeV3#bootable}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#host DataOpenstackBlockstorageVolumeV3#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#id DataOpenstackBlockstorageVolumeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#metadata DataOpenstackBlockstorageVolumeV3#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#name DataOpenstackBlockstorageVolumeV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#region DataOpenstackBlockstorageVolumeV3#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#status DataOpenstackBlockstorageVolumeV3#status}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#volume_type DataOpenstackBlockstorageVolumeV3#volume_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackBlockstorageVolumeV3AttachmentList <a name="DataOpenstackBlockstorageVolumeV3AttachmentList" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackBlockstorageVolumeV3AttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackBlockstorageVolumeV3AttachmentOutputReference <a name="DataOpenstackBlockstorageVolumeV3AttachmentOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_blockstorage_volume_v3

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment">DataOpenstackBlockstorageVolumeV3Attachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackBlockstorageVolumeV3Attachment
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment">DataOpenstackBlockstorageVolumeV3Attachment</a>

---



