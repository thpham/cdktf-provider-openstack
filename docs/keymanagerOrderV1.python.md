# `keymanagerOrderV1` Submodule <a name="`keymanagerOrderV1` Submodule" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymanagerOrderV1 <a name="KeymanagerOrderV1" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1 openstack_keymanager_order_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  meta: KeymanagerOrderV1Meta,
  type: str,
  id: str = None,
  region: str = None,
  timeouts: KeymanagerOrderV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.meta">meta</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a></code> | meta block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#type KeymanagerOrderV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#id KeymanagerOrderV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#region KeymanagerOrderV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.meta"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

meta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#meta KeymanagerOrderV1#meta}

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#type KeymanagerOrderV1#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#id KeymanagerOrderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#region KeymanagerOrderV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#timeouts KeymanagerOrderV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta">put_meta</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_meta` <a name="put_meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta"></a>

```python
def put_meta(
  algorithm: str,
  bit_length: typing.Union[int, float],
  expiration: str = None,
  mode: str = None,
  name: str = None,
  payload_content_type: str = None
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#algorithm KeymanagerOrderV1#algorithm}.

---

###### `bit_length`<sup>Required</sup> <a name="bit_length" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta.parameter.bitLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#bit_length KeymanagerOrderV1#bit_length}.

---

###### `expiration`<sup>Optional</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta.parameter.expiration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#expiration KeymanagerOrderV1#expiration}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#mode KeymanagerOrderV1#mode}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#name KeymanagerOrderV1#name}.

---

###### `payload_content_type`<sup>Optional</sup> <a name="payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta.parameter.payloadContentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#payload_content_type KeymanagerOrderV1#payload_content_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#create KeymanagerOrderV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#delete KeymanagerOrderV1#delete}.

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeymanagerOrderV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeymanagerOrderV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeymanagerOrderV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeymanagerOrderV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeymanagerOrderV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.containerRef">container_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.creatorId">creator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.meta">meta</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference">KeymanagerOrderV1MetaOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.orderRef">order_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.secretRef">secret_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatus">sub_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatusMessage">sub_status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference">KeymanagerOrderV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.metaInput">meta_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_ref`<sup>Required</sup> <a name="container_ref" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.containerRef"></a>

```python
container_ref: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `creator_id`<sup>Required</sup> <a name="creator_id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.creatorId"></a>

```python
creator_id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.meta"></a>

```python
meta: KeymanagerOrderV1MetaOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference">KeymanagerOrderV1MetaOutputReference</a>

---

##### `order_ref`<sup>Required</sup> <a name="order_ref" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.orderRef"></a>

```python
order_ref: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.secretRef"></a>

```python
secret_ref: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sub_status`<sup>Required</sup> <a name="sub_status" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatus"></a>

```python
sub_status: str
```

- *Type:* str

---

##### `sub_status_message`<sup>Required</sup> <a name="sub_status_message" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatusMessage"></a>

```python
sub_status_message: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeouts"></a>

```python
timeouts: KeymanagerOrderV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference">KeymanagerOrderV1TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.metaInput"></a>

```python
meta_input: KeymanagerOrderV1Meta
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeymanagerOrderV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeymanagerOrderV1Config <a name="KeymanagerOrderV1Config" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  meta: KeymanagerOrderV1Meta,
  type: str,
  id: str = None,
  region: str = None,
  timeouts: KeymanagerOrderV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.meta">meta</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a></code> | meta block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#type KeymanagerOrderV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#id KeymanagerOrderV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#region KeymanagerOrderV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.meta"></a>

```python
meta: KeymanagerOrderV1Meta
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

meta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#meta KeymanagerOrderV1#meta}

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#type KeymanagerOrderV1#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#id KeymanagerOrderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#region KeymanagerOrderV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.timeouts"></a>

```python
timeouts: KeymanagerOrderV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#timeouts KeymanagerOrderV1#timeouts}

---

### KeymanagerOrderV1Meta <a name="KeymanagerOrderV1Meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1Meta(
  algorithm: str,
  bit_length: typing.Union[int, float],
  expiration: str = None,
  mode: str = None,
  name: str = None,
  payload_content_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#algorithm KeymanagerOrderV1#algorithm}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.bitLength">bit_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#bit_length KeymanagerOrderV1#bit_length}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.expiration">expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#expiration KeymanagerOrderV1#expiration}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#mode KeymanagerOrderV1#mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#name KeymanagerOrderV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.payloadContentType">payload_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#payload_content_type KeymanagerOrderV1#payload_content_type}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#algorithm KeymanagerOrderV1#algorithm}.

---

##### `bit_length`<sup>Required</sup> <a name="bit_length" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.bitLength"></a>

```python
bit_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#bit_length KeymanagerOrderV1#bit_length}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#expiration KeymanagerOrderV1#expiration}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#mode KeymanagerOrderV1#mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#name KeymanagerOrderV1#name}.

---

##### `payload_content_type`<sup>Optional</sup> <a name="payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.payloadContentType"></a>

```python
payload_content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#payload_content_type KeymanagerOrderV1#payload_content_type}.

---

### KeymanagerOrderV1Timeouts <a name="KeymanagerOrderV1Timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#create KeymanagerOrderV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#delete KeymanagerOrderV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#create KeymanagerOrderV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#delete KeymanagerOrderV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeymanagerOrderV1MetaOutputReference <a name="KeymanagerOrderV1MetaOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetPayloadContentType">reset_payload_content_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration` <a name="reset_expiration" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_mode` <a name="reset_mode" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_payload_content_type` <a name="reset_payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetPayloadContentType"></a>

```python
def reset_payload_content_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLengthInput">bit_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentTypeInput">payload_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLength">bit_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentType">payload_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `bit_length_input`<sup>Optional</sup> <a name="bit_length_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLengthInput"></a>

```python
bit_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `payload_content_type_input`<sup>Optional</sup> <a name="payload_content_type_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentTypeInput"></a>

```python
payload_content_type_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `bit_length`<sup>Required</sup> <a name="bit_length" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLength"></a>

```python
bit_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `payload_content_type`<sup>Required</sup> <a name="payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentType"></a>

```python
payload_content_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.internalValue"></a>

```python
internal_value: KeymanagerOrderV1Meta
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

---


### KeymanagerOrderV1TimeoutsOutputReference <a name="KeymanagerOrderV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_order_v1

keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeymanagerOrderV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>]

---



