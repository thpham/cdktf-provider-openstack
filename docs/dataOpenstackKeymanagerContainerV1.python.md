# `dataOpenstackKeymanagerContainerV1` Submodule <a name="`dataOpenstackKeymanagerContainerV1` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackKeymanagerContainerV1 <a name="DataOpenstackKeymanagerContainerV1" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1 openstack_keymanager_container_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1(
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
  name: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#id DataOpenstackKeymanagerContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#name DataOpenstackKeymanagerContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#region DataOpenstackKeymanagerContainerV1#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#id DataOpenstackKeymanagerContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#name DataOpenstackKeymanagerContainerV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#region DataOpenstackKeymanagerContainerV1#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackKeymanagerContainerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackKeymanagerContainerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackKeymanagerContainerV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackKeymanagerContainerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackKeymanagerContainerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList">DataOpenstackKeymanagerContainerV1AclList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.consumers">consumers</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList">DataOpenstackKeymanagerContainerV1ConsumersList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.containerRef">container_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.creatorId">creator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.secretRefs">secret_refs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList">DataOpenstackKeymanagerContainerV1SecretRefsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `acl`<sup>Required</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.acl"></a>

```python
acl: DataOpenstackKeymanagerContainerV1AclList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList">DataOpenstackKeymanagerContainerV1AclList</a>

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.consumers"></a>

```python
consumers: DataOpenstackKeymanagerContainerV1ConsumersList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList">DataOpenstackKeymanagerContainerV1ConsumersList</a>

---

##### `container_ref`<sup>Required</sup> <a name="container_ref" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.containerRef"></a>

```python
container_ref: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `creator_id`<sup>Required</sup> <a name="creator_id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.creatorId"></a>

```python
creator_id: str
```

- *Type:* str

---

##### `secret_refs`<sup>Required</sup> <a name="secret_refs" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.secretRefs"></a>

```python
secret_refs: DataOpenstackKeymanagerContainerV1SecretRefsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList">DataOpenstackKeymanagerContainerV1SecretRefsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackKeymanagerContainerV1Acl <a name="DataOpenstackKeymanagerContainerV1Acl" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl()
```


### DataOpenstackKeymanagerContainerV1AclRead <a name="DataOpenstackKeymanagerContainerV1AclRead" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead()
```


### DataOpenstackKeymanagerContainerV1Config <a name="DataOpenstackKeymanagerContainerV1Config" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#id DataOpenstackKeymanagerContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#name DataOpenstackKeymanagerContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#region DataOpenstackKeymanagerContainerV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#id DataOpenstackKeymanagerContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#name DataOpenstackKeymanagerContainerV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_container_v1#region DataOpenstackKeymanagerContainerV1#region}.

---

### DataOpenstackKeymanagerContainerV1Consumers <a name="DataOpenstackKeymanagerContainerV1Consumers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers()
```


### DataOpenstackKeymanagerContainerV1SecretRefs <a name="DataOpenstackKeymanagerContainerV1SecretRefs" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackKeymanagerContainerV1AclList <a name="DataOpenstackKeymanagerContainerV1AclList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackKeymanagerContainerV1AclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackKeymanagerContainerV1AclOutputReference <a name="DataOpenstackKeymanagerContainerV1AclOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList">DataOpenstackKeymanagerContainerV1AclReadList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl">DataOpenstackKeymanagerContainerV1Acl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.read"></a>

```python
read: DataOpenstackKeymanagerContainerV1AclReadList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList">DataOpenstackKeymanagerContainerV1AclReadList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackKeymanagerContainerV1Acl
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Acl">DataOpenstackKeymanagerContainerV1Acl</a>

---


### DataOpenstackKeymanagerContainerV1AclReadList <a name="DataOpenstackKeymanagerContainerV1AclReadList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackKeymanagerContainerV1AclReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackKeymanagerContainerV1AclReadOutputReference <a name="DataOpenstackKeymanagerContainerV1AclReadOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.projectAccess">project_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead">DataOpenstackKeymanagerContainerV1AclRead</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `project_access`<sup>Required</sup> <a name="project_access" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.projectAccess"></a>

```python
project_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `users`<sup>Required</sup> <a name="users" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclReadOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackKeymanagerContainerV1AclRead
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1AclRead">DataOpenstackKeymanagerContainerV1AclRead</a>

---


### DataOpenstackKeymanagerContainerV1ConsumersList <a name="DataOpenstackKeymanagerContainerV1ConsumersList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackKeymanagerContainerV1ConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackKeymanagerContainerV1ConsumersOutputReference <a name="DataOpenstackKeymanagerContainerV1ConsumersOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers">DataOpenstackKeymanagerContainerV1Consumers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1ConsumersOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackKeymanagerContainerV1Consumers
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1Consumers">DataOpenstackKeymanagerContainerV1Consumers</a>

---


### DataOpenstackKeymanagerContainerV1SecretRefsList <a name="DataOpenstackKeymanagerContainerV1SecretRefsList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackKeymanagerContainerV1SecretRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackKeymanagerContainerV1SecretRefsOutputReference <a name="DataOpenstackKeymanagerContainerV1SecretRefsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_keymanager_container_v1

dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.secretRef">secret_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs">DataOpenstackKeymanagerContainerV1SecretRefs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.secretRef"></a>

```python
secret_ref: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackKeymanagerContainerV1SecretRefs
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerContainerV1.DataOpenstackKeymanagerContainerV1SecretRefs">DataOpenstackKeymanagerContainerV1SecretRefs</a>

---



