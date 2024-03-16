# `dataOpenstackComputeInstanceV2` Submodule <a name="`dataOpenstackComputeInstanceV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackComputeInstanceV2 <a name="DataOpenstackComputeInstanceV2" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2 openstack_compute_instance_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  network: typing.Union[IResolvable, typing.List[DataOpenstackComputeInstanceV2Network]] = None,
  region: str = None,
  user_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#id DataOpenstackComputeInstanceV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#region DataOpenstackComputeInstanceV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#user_data DataOpenstackComputeInstanceV2#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#id DataOpenstackComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.network"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#network DataOpenstackComputeInstanceV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#region DataOpenstackComputeInstanceV2#region}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#user_data DataOpenstackComputeInstanceV2#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_network` <a name="put_network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.putNetwork"></a>

```python
def put_network(
  value: typing.Union[IResolvable, typing.List[DataOpenstackComputeInstanceV2Network]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.putNetwork.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]

---

##### `reset_network` <a name="reset_network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetUserData"></a>

```python
def reset_user_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackComputeInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackComputeInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackComputeInstanceV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackComputeInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackComputeInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV4">access_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV6">access_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorName">flavor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.network">network</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList">DataOpenstackComputeInstanceV2NetworkList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.powerState">power_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.networkInput">network_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userData">user_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_ip_v4`<sup>Required</sup> <a name="access_ip_v4" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV4"></a>

```python
access_ip_v4: str
```

- *Type:* str

---

##### `access_ip_v6`<sup>Required</sup> <a name="access_ip_v6" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV6"></a>

```python
access_ip_v6: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `flavor_name`<sup>Required</sup> <a name="flavor_name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorName"></a>

```python
flavor_name: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.network"></a>

```python
network: DataOpenstackComputeInstanceV2NetworkList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList">DataOpenstackComputeInstanceV2NetworkList</a>

---

##### `power_state`<sup>Required</sup> <a name="power_state" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated`<sup>Required</sup> <a name="updated" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.networkInput"></a>

```python
network_input: typing.Union[IResolvable, typing.List[DataOpenstackComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackComputeInstanceV2Config <a name="DataOpenstackComputeInstanceV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  network: typing.Union[IResolvable, typing.List[DataOpenstackComputeInstanceV2Network]] = None,
  region: str = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#id DataOpenstackComputeInstanceV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#region DataOpenstackComputeInstanceV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#user_data DataOpenstackComputeInstanceV2#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#id DataOpenstackComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.network"></a>

```python
network: typing.Union[IResolvable, typing.List[DataOpenstackComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#network DataOpenstackComputeInstanceV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#region DataOpenstackComputeInstanceV2#region}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#user_data DataOpenstackComputeInstanceV2#user_data}.

---

### DataOpenstackComputeInstanceV2Network <a name="DataOpenstackComputeInstanceV2Network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackComputeInstanceV2NetworkList <a name="DataOpenstackComputeInstanceV2NetworkList" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackComputeInstanceV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOpenstackComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]]

---


### DataOpenstackComputeInstanceV2NetworkOutputReference <a name="DataOpenstackComputeInstanceV2NetworkOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_compute_instance_v2

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV4">fixed_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV6">fixed_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_ip_v4`<sup>Required</sup> <a name="fixed_ip_v4" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV4"></a>

```python
fixed_ip_v4: str
```

- *Type:* str

---

##### `fixed_ip_v6`<sup>Required</sup> <a name="fixed_ip_v6" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV6"></a>

```python
fixed_ip_v6: str
```

- *Type:* str

---

##### `mac`<sup>Required</sup> <a name="mac" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOpenstackComputeInstanceV2Network]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>]

---



