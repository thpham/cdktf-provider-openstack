# `identityRoleAssignmentV3` Submodule <a name="`identityRoleAssignmentV3` Submodule" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityRoleAssignmentV3 <a name="IdentityRoleAssignmentV3" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3 openstack_identity_role_assignment_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_role_assignment_v3

identityRoleAssignmentV3.IdentityRoleAssignmentV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_id: str,
  domain_id: str = None,
  group_id: str = None,
  id: str = None,
  project_id: str = None,
  region: str = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#region IdentityRoleAssignmentV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#user_id IdentityRoleAssignmentV3#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.roleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}.

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}.

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#region IdentityRoleAssignmentV3#region}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#user_id IdentityRoleAssignmentV3#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_domain_id` <a name="reset_domain_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityRoleAssignmentV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import identity_role_assignment_v3

identityRoleAssignmentV3.IdentityRoleAssignmentV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import identity_role_assignment_v3

identityRoleAssignmentV3.IdentityRoleAssignmentV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import identity_role_assignment_v3

identityRoleAssignmentV3.IdentityRoleAssignmentV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import identity_role_assignment_v3

identityRoleAssignmentV3.IdentityRoleAssignmentV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityRoleAssignmentV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityRoleAssignmentV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityRoleAssignmentV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityRoleAssignmentV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityRoleAssignmentV3Config <a name="IdentityRoleAssignmentV3Config" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_role_assignment_v3

identityRoleAssignmentV3.IdentityRoleAssignmentV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_id: str,
  domain_id: str = None,
  group_id: str = None,
  id: str = None,
  project_id: str = None,
  region: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.roleId">role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#region IdentityRoleAssignmentV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#user_id IdentityRoleAssignmentV3#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}.

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}.

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#region IdentityRoleAssignmentV3#region}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_role_assignment_v3#user_id IdentityRoleAssignmentV3#user_id}.

---


