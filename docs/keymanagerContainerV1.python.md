# `keymanagerContainerV1` Submodule <a name="`keymanagerContainerV1` Submodule" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymanagerContainerV1 <a name="KeymanagerContainerV1" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1 openstack_keymanager_container_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  acl: KeymanagerContainerV1Acl = None,
  id: str = None,
  name: str = None,
  region: str = None,
  secret_refs: typing.Union[IResolvable, typing.List[KeymanagerContainerV1SecretRefs]] = None,
  timeouts: KeymanagerContainerV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#type KeymanagerContainerV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a></code> | acl block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#id KeymanagerContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#region KeymanagerContainerV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.secretRefs">secret_refs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]</code> | secret_refs block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#type KeymanagerContainerV1#type}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.acl"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#acl KeymanagerContainerV1#acl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#id KeymanagerContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#region KeymanagerContainerV1#region}.

---

##### `secret_refs`<sup>Optional</sup> <a name="secret_refs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.secretRefs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]

secret_refs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#secret_refs KeymanagerContainerV1#secret_refs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#timeouts KeymanagerContainerV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putAcl">put_acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putSecretRefs">put_secret_refs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetSecretRefs">reset_secret_refs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_acl` <a name="put_acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putAcl"></a>

```python
def put_acl(
  read: KeymanagerContainerV1AclRead = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putAcl.parameter.read"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

read block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#read KeymanagerContainerV1#read}

---

##### `put_secret_refs` <a name="put_secret_refs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putSecretRefs"></a>

```python
def put_secret_refs(
  value: typing.Union[IResolvable, typing.List[KeymanagerContainerV1SecretRefs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putSecretRefs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#create KeymanagerContainerV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#delete KeymanagerContainerV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#update KeymanagerContainerV1#update}.

---

##### `reset_acl` <a name="reset_acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_refs` <a name="reset_secret_refs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetSecretRefs"></a>

```python
def reset_secret_refs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeymanagerContainerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeymanagerContainerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeymanagerContainerV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeymanagerContainerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeymanagerContainerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference">KeymanagerContainerV1AclOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.consumers">consumers</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList">KeymanagerContainerV1ConsumersList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.containerRef">container_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.creatorId">creator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefs">secret_refs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList">KeymanagerContainerV1SecretRefsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference">KeymanagerContainerV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.aclInput">acl_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefsInput">secret_refs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl`<sup>Required</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.acl"></a>

```python
acl: KeymanagerContainerV1AclOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference">KeymanagerContainerV1AclOutputReference</a>

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.consumers"></a>

```python
consumers: KeymanagerContainerV1ConsumersList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList">KeymanagerContainerV1ConsumersList</a>

---

##### `container_ref`<sup>Required</sup> <a name="container_ref" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.containerRef"></a>

```python
container_ref: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `creator_id`<sup>Required</sup> <a name="creator_id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.creatorId"></a>

```python
creator_id: str
```

- *Type:* str

---

##### `secret_refs`<sup>Required</sup> <a name="secret_refs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefs"></a>

```python
secret_refs: KeymanagerContainerV1SecretRefsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList">KeymanagerContainerV1SecretRefsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeouts"></a>

```python
timeouts: KeymanagerContainerV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference">KeymanagerContainerV1TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.aclInput"></a>

```python
acl_input: KeymanagerContainerV1Acl
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_refs_input`<sup>Optional</sup> <a name="secret_refs_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefsInput"></a>

```python
secret_refs_input: typing.Union[IResolvable, typing.List[KeymanagerContainerV1SecretRefs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeymanagerContainerV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeymanagerContainerV1Acl <a name="KeymanagerContainerV1Acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1Acl(
  read: KeymanagerContainerV1AclRead = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a></code> | read block. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl.property.read"></a>

```python
read: KeymanagerContainerV1AclRead
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

read block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#read KeymanagerContainerV1#read}

---

### KeymanagerContainerV1AclRead <a name="KeymanagerContainerV1AclRead" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1AclRead(
  project_access: typing.Union[bool, IResolvable] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.projectAccess">project_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#project_access KeymanagerContainerV1#project_access}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.users">users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#users KeymanagerContainerV1#users}. |

---

##### `project_access`<sup>Optional</sup> <a name="project_access" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.projectAccess"></a>

```python
project_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#project_access KeymanagerContainerV1#project_access}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#users KeymanagerContainerV1#users}.

---

### KeymanagerContainerV1Config <a name="KeymanagerContainerV1Config" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  acl: KeymanagerContainerV1Acl = None,
  id: str = None,
  name: str = None,
  region: str = None,
  secret_refs: typing.Union[IResolvable, typing.List[KeymanagerContainerV1SecretRefs]] = None,
  timeouts: KeymanagerContainerV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#type KeymanagerContainerV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a></code> | acl block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#id KeymanagerContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#region KeymanagerContainerV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.secretRefs">secret_refs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]</code> | secret_refs block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#type KeymanagerContainerV1#type}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.acl"></a>

```python
acl: KeymanagerContainerV1Acl
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#acl KeymanagerContainerV1#acl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#id KeymanagerContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#region KeymanagerContainerV1#region}.

---

##### `secret_refs`<sup>Optional</sup> <a name="secret_refs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.secretRefs"></a>

```python
secret_refs: typing.Union[IResolvable, typing.List[KeymanagerContainerV1SecretRefs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]

secret_refs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#secret_refs KeymanagerContainerV1#secret_refs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.timeouts"></a>

```python
timeouts: KeymanagerContainerV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#timeouts KeymanagerContainerV1#timeouts}

---

### KeymanagerContainerV1Consumers <a name="KeymanagerContainerV1Consumers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1Consumers()
```


### KeymanagerContainerV1SecretRefs <a name="KeymanagerContainerV1SecretRefs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1SecretRefs(
  secret_ref: str,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.secretRef">secret_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#secret_ref KeymanagerContainerV1#secret_ref}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}. |

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.secretRef"></a>

```python
secret_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#secret_ref KeymanagerContainerV1#secret_ref}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}.

---

### KeymanagerContainerV1Timeouts <a name="KeymanagerContainerV1Timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#create KeymanagerContainerV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#delete KeymanagerContainerV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#update KeymanagerContainerV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#create KeymanagerContainerV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#delete KeymanagerContainerV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#update KeymanagerContainerV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeymanagerContainerV1AclOutputReference <a name="KeymanagerContainerV1AclOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1AclOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.putRead">put_read</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_read` <a name="put_read" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.putRead"></a>

```python
def put_read(
  project_access: typing.Union[bool, IResolvable] = None,
  users: typing.List[str] = None
) -> None
```

###### `project_access`<sup>Optional</sup> <a name="project_access" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.putRead.parameter.projectAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#project_access KeymanagerContainerV1#project_access}.

---

###### `users`<sup>Optional</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.putRead.parameter.users"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#users KeymanagerContainerV1#users}.

---

##### `reset_read` <a name="reset_read" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference">KeymanagerContainerV1AclReadOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.readInput">read_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.read"></a>

```python
read: KeymanagerContainerV1AclReadOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference">KeymanagerContainerV1AclReadOutputReference</a>

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.readInput"></a>

```python
read_input: KeymanagerContainerV1AclRead
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.internalValue"></a>

```python
internal_value: KeymanagerContainerV1Acl
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

---


### KeymanagerContainerV1AclReadOutputReference <a name="KeymanagerContainerV1AclReadOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetProjectAccess">reset_project_access</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_access` <a name="reset_project_access" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetProjectAccess"></a>

```python
def reset_project_access() -> None
```

##### `reset_users` <a name="reset_users" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccessInput">project_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccess">project_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `project_access_input`<sup>Optional</sup> <a name="project_access_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccessInput"></a>

```python
project_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_access`<sup>Required</sup> <a name="project_access" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccess"></a>

```python
project_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `users`<sup>Required</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.internalValue"></a>

```python
internal_value: KeymanagerContainerV1AclRead
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

---


### KeymanagerContainerV1ConsumersList <a name="KeymanagerContainerV1ConsumersList" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1ConsumersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeymanagerContainerV1ConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KeymanagerContainerV1ConsumersOutputReference <a name="KeymanagerContainerV1ConsumersOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers">KeymanagerContainerV1Consumers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.internalValue"></a>

```python
internal_value: KeymanagerContainerV1Consumers
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers">KeymanagerContainerV1Consumers</a>

---


### KeymanagerContainerV1SecretRefsList <a name="KeymanagerContainerV1SecretRefsList" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1SecretRefsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KeymanagerContainerV1SecretRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KeymanagerContainerV1SecretRefs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]]

---


### KeymanagerContainerV1SecretRefsOutputReference <a name="KeymanagerContainerV1SecretRefsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRefInput">secret_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRef">secret_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_ref_input`<sup>Optional</sup> <a name="secret_ref_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRefInput"></a>

```python
secret_ref_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRef"></a>

```python
secret_ref: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeymanagerContainerV1SecretRefs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>]

---


### KeymanagerContainerV1TimeoutsOutputReference <a name="KeymanagerContainerV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_container_v1

keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeymanagerContainerV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>]

---



