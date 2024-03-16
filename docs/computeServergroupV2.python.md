# `computeServergroupV2` Submodule <a name="`computeServergroupV2` Submodule" id="@ithings/cdktf-provider-openstack.computeServergroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeServergroupV2 <a name="ComputeServergroupV2" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2 openstack_compute_servergroup_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2(
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
  id: str = None,
  policies: typing.List[str] = None,
  region: str = None,
  rules: ComputeServergroupV2Rules = None,
  value_specs: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#name ComputeServergroupV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#id ComputeServergroupV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#policies ComputeServergroupV2#policies}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#region ComputeServergroupV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.rules">rules</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a></code> | rules block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#value_specs ComputeServergroupV2#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#name ComputeServergroupV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#id ComputeServergroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#policies ComputeServergroupV2#policies}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#region ComputeServergroupV2#region}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.rules"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#rules ComputeServergroupV2#rules}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.valueSpecs"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#value_specs ComputeServergroupV2#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetValueSpecs">reset_value_specs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.putRules"></a>

```python
def put_rules(
  max_server_per_host: typing.Union[int, float] = None
) -> None
```

###### `max_server_per_host`<sup>Optional</sup> <a name="max_server_per_host" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.putRules.parameter.maxServerPerHost"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#max_server_per_host ComputeServergroupV2#max_server_per_host}.

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policies` <a name="reset_policies" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rules` <a name="reset_rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_value_specs` <a name="reset_value_specs" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetValueSpecs"></a>

```python
def reset_value_specs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeServergroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeServergroupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeServergroupV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeServergroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeServergroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rules">rules</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference">ComputeServergroupV2RulesOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rulesInput">rules_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecsInput">value_specs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rules"></a>

```python
rules: ComputeServergroupV2RulesOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference">ComputeServergroupV2RulesOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rulesInput"></a>

```python
rules_input: ComputeServergroupV2Rules
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

---

##### `value_specs_input`<sup>Optional</sup> <a name="value_specs_input" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecsInput"></a>

```python
value_specs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `value_specs`<sup>Required</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeServergroupV2Config <a name="ComputeServergroupV2Config" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  policies: typing.List[str] = None,
  region: str = None,
  rules: ComputeServergroupV2Rules = None,
  value_specs: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#name ComputeServergroupV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#id ComputeServergroupV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#policies ComputeServergroupV2#policies}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#region ComputeServergroupV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.rules">rules</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a></code> | rules block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.valueSpecs">value_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#value_specs ComputeServergroupV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#name ComputeServergroupV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#id ComputeServergroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#policies ComputeServergroupV2#policies}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#region ComputeServergroupV2#region}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.rules"></a>

```python
rules: ComputeServergroupV2Rules
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#rules ComputeServergroupV2#rules}

---

##### `value_specs`<sup>Optional</sup> <a name="value_specs" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.valueSpecs"></a>

```python
value_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#value_specs ComputeServergroupV2#value_specs}.

---

### ComputeServergroupV2Rules <a name="ComputeServergroupV2Rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2Rules(
  max_server_per_host: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules.property.maxServerPerHost">max_server_per_host</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#max_server_per_host ComputeServergroupV2#max_server_per_host}. |

---

##### `max_server_per_host`<sup>Optional</sup> <a name="max_server_per_host" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules.property.maxServerPerHost"></a>

```python
max_server_per_host: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#max_server_per_host ComputeServergroupV2#max_server_per_host}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeServergroupV2RulesOutputReference <a name="ComputeServergroupV2RulesOutputReference" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_servergroup_v2

computeServergroupV2.ComputeServergroupV2RulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resetMaxServerPerHost">reset_max_server_per_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_server_per_host` <a name="reset_max_server_per_host" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resetMaxServerPerHost"></a>

```python
def reset_max_server_per_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHostInput">max_server_per_host_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHost">max_server_per_host</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_server_per_host_input`<sup>Optional</sup> <a name="max_server_per_host_input" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHostInput"></a>

```python
max_server_per_host_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_server_per_host`<sup>Required</sup> <a name="max_server_per_host" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHost"></a>

```python
max_server_per_host: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.internalValue"></a>

```python
internal_value: ComputeServergroupV2Rules
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

---



