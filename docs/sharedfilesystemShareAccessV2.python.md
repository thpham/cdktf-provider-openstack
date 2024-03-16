# `sharedfilesystemShareAccessV2` Submodule <a name="`sharedfilesystemShareAccessV2` Submodule" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedfilesystemShareAccessV2 <a name="SharedfilesystemShareAccessV2" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2 openstack_sharedfilesystem_share_access_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  access_to: str,
  access_type: str,
  share_id: str,
  id: str = None,
  region: str = None,
  timeouts: SharedfilesystemShareAccessV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_level SharedfilesystemShareAccessV2#access_level}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.accessTo">access_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_to SharedfilesystemShareAccessV2#access_to}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_type SharedfilesystemShareAccessV2#access_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.shareId">share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#share_id SharedfilesystemShareAccessV2#share_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#id SharedfilesystemShareAccessV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#region SharedfilesystemShareAccessV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_level SharedfilesystemShareAccessV2#access_level}.

---

##### `access_to`<sup>Required</sup> <a name="access_to" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.accessTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_to SharedfilesystemShareAccessV2#access_to}.

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.accessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_type SharedfilesystemShareAccessV2#access_type}.

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.shareId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#share_id SharedfilesystemShareAccessV2#share_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#id SharedfilesystemShareAccessV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#region SharedfilesystemShareAccessV2#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#timeouts SharedfilesystemShareAccessV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#create SharedfilesystemShareAccessV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#delete SharedfilesystemShareAccessV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#update SharedfilesystemShareAccessV2#update}.

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SharedfilesystemShareAccessV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SharedfilesystemShareAccessV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SharedfilesystemShareAccessV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SharedfilesystemShareAccessV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedfilesystemShareAccessV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference">SharedfilesystemShareAccessV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessToInput">access_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.shareIdInput">share_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessTo">access_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.shareId">share_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.timeouts"></a>

```python
timeouts: SharedfilesystemShareAccessV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference">SharedfilesystemShareAccessV2TimeoutsOutputReference</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `access_to_input`<sup>Optional</sup> <a name="access_to_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessToInput"></a>

```python
access_to_input: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `share_id_input`<sup>Optional</sup> <a name="share_id_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.shareIdInput"></a>

```python
share_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SharedfilesystemShareAccessV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a>]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_to`<sup>Required</sup> <a name="access_to" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessTo"></a>

```python
access_to: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SharedfilesystemShareAccessV2Config <a name="SharedfilesystemShareAccessV2Config" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_level: str,
  access_to: str,
  access_type: str,
  share_id: str,
  id: str = None,
  region: str = None,
  timeouts: SharedfilesystemShareAccessV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_level SharedfilesystemShareAccessV2#access_level}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.accessTo">access_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_to SharedfilesystemShareAccessV2#access_to}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_type SharedfilesystemShareAccessV2#access_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.shareId">share_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#share_id SharedfilesystemShareAccessV2#share_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#id SharedfilesystemShareAccessV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#region SharedfilesystemShareAccessV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_level SharedfilesystemShareAccessV2#access_level}.

---

##### `access_to`<sup>Required</sup> <a name="access_to" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.accessTo"></a>

```python
access_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_to SharedfilesystemShareAccessV2#access_to}.

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#access_type SharedfilesystemShareAccessV2#access_type}.

---

##### `share_id`<sup>Required</sup> <a name="share_id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.shareId"></a>

```python
share_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#share_id SharedfilesystemShareAccessV2#share_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#id SharedfilesystemShareAccessV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#region SharedfilesystemShareAccessV2#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Config.property.timeouts"></a>

```python
timeouts: SharedfilesystemShareAccessV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#timeouts SharedfilesystemShareAccessV2#timeouts}

---

### SharedfilesystemShareAccessV2Timeouts <a name="SharedfilesystemShareAccessV2Timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#create SharedfilesystemShareAccessV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#delete SharedfilesystemShareAccessV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#update SharedfilesystemShareAccessV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#create SharedfilesystemShareAccessV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#delete SharedfilesystemShareAccessV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_access_v2#update SharedfilesystemShareAccessV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedfilesystemShareAccessV2TimeoutsOutputReference <a name="SharedfilesystemShareAccessV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import sharedfilesystem_share_access_v2

sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharedfilesystemShareAccessV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareAccessV2.SharedfilesystemShareAccessV2Timeouts">SharedfilesystemShareAccessV2Timeouts</a>]

---



