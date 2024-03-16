# `dataOpenstackComputeLimitsV2` Submodule <a name="`dataOpenstackComputeLimitsV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackComputeLimitsV2 <a name="DataOpenstackComputeLimitsV2" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2 openstack_compute_limits_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_limits_v2

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2(
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
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#project_id DataOpenstackComputeLimitsV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#id DataOpenstackComputeLimitsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#region DataOpenstackComputeLimitsV2#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#project_id DataOpenstackComputeLimitsV2#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#id DataOpenstackComputeLimitsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#region DataOpenstackComputeLimitsV2#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackComputeLimitsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_limits_v2

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_limits_v2

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_limits_v2

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_limits_v2

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackComputeLimitsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackComputeLimitsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackComputeLimitsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackComputeLimitsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxImageMeta">max_image_meta</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonality">max_personality</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonalitySize">max_personality_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroupRules">max_security_group_rules</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroups">max_security_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroupMembers">max_server_group_members</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroups">max_server_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerMeta">max_server_meta</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalCores">max_total_cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalFloatingIps">max_total_floating_ips</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalInstances">max_total_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalKeypairs">max_total_keypairs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalRamSize">max_total_ram_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalCoresUsed">total_cores_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalFloatingIpsUsed">total_floating_ips_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalInstancesUsed">total_instances_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalRamUsed">total_ram_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalSecurityGroupsUsed">total_security_groups_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalServerGroupsUsed">total_server_groups_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `max_image_meta`<sup>Required</sup> <a name="max_image_meta" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxImageMeta"></a>

```python
max_image_meta: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_personality`<sup>Required</sup> <a name="max_personality" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonality"></a>

```python
max_personality: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_personality_size`<sup>Required</sup> <a name="max_personality_size" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonalitySize"></a>

```python
max_personality_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_security_group_rules`<sup>Required</sup> <a name="max_security_group_rules" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroupRules"></a>

```python
max_security_group_rules: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_security_groups`<sup>Required</sup> <a name="max_security_groups" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroups"></a>

```python
max_security_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_server_group_members`<sup>Required</sup> <a name="max_server_group_members" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroupMembers"></a>

```python
max_server_group_members: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_server_groups`<sup>Required</sup> <a name="max_server_groups" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroups"></a>

```python
max_server_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_server_meta`<sup>Required</sup> <a name="max_server_meta" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerMeta"></a>

```python
max_server_meta: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_cores`<sup>Required</sup> <a name="max_total_cores" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalCores"></a>

```python
max_total_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_floating_ips`<sup>Required</sup> <a name="max_total_floating_ips" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalFloatingIps"></a>

```python
max_total_floating_ips: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_instances`<sup>Required</sup> <a name="max_total_instances" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalInstances"></a>

```python
max_total_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_keypairs`<sup>Required</sup> <a name="max_total_keypairs" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalKeypairs"></a>

```python
max_total_keypairs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_ram_size`<sup>Required</sup> <a name="max_total_ram_size" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalRamSize"></a>

```python
max_total_ram_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_cores_used`<sup>Required</sup> <a name="total_cores_used" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalCoresUsed"></a>

```python
total_cores_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_floating_ips_used`<sup>Required</sup> <a name="total_floating_ips_used" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalFloatingIpsUsed"></a>

```python
total_floating_ips_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_instances_used`<sup>Required</sup> <a name="total_instances_used" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalInstancesUsed"></a>

```python
total_instances_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_ram_used`<sup>Required</sup> <a name="total_ram_used" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalRamUsed"></a>

```python
total_ram_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_security_groups_used`<sup>Required</sup> <a name="total_security_groups_used" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalSecurityGroupsUsed"></a>

```python
total_security_groups_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_server_groups_used`<sup>Required</sup> <a name="total_server_groups_used" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalServerGroupsUsed"></a>

```python
total_server_groups_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackComputeLimitsV2Config <a name="DataOpenstackComputeLimitsV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_limits_v2

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#project_id DataOpenstackComputeLimitsV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#id DataOpenstackComputeLimitsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#region DataOpenstackComputeLimitsV2#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#project_id DataOpenstackComputeLimitsV2#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#id DataOpenstackComputeLimitsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#region DataOpenstackComputeLimitsV2#region}.

---



