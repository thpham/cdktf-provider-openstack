# `identityApplicationCredentialV3` Submodule <a name="`identityApplicationCredentialV3` Submodule" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityApplicationCredentialV3 <a name="IdentityApplicationCredentialV3" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3 openstack_identity_application_credential_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3(
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
  access_rules: typing.Union[IResolvable, typing.List[IdentityApplicationCredentialV3AccessRules]] = None,
  description: str = None,
  expires_at: str = None,
  id: str = None,
  region: str = None,
  roles: typing.List[str] = None,
  secret: str = None,
  unrestricted: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#name IdentityApplicationCredentialV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.accessRules">access_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]</code> | access_rules block. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#description IdentityApplicationCredentialV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#expires_at IdentityApplicationCredentialV3#expires_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#id IdentityApplicationCredentialV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#region IdentityApplicationCredentialV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#roles IdentityApplicationCredentialV3#roles}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#secret IdentityApplicationCredentialV3#secret}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.unrestricted">unrestricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#unrestricted IdentityApplicationCredentialV3#unrestricted}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#name IdentityApplicationCredentialV3#name}.

---

##### `access_rules`<sup>Optional</sup> <a name="access_rules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.accessRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#access_rules IdentityApplicationCredentialV3#access_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#description IdentityApplicationCredentialV3#description}.

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.expiresAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#expires_at IdentityApplicationCredentialV3#expires_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#id IdentityApplicationCredentialV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#region IdentityApplicationCredentialV3#region}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#roles IdentityApplicationCredentialV3#roles}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#secret IdentityApplicationCredentialV3#secret}.

---

##### `unrestricted`<sup>Optional</sup> <a name="unrestricted" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.unrestricted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#unrestricted IdentityApplicationCredentialV3#unrestricted}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.putAccessRules">put_access_rules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetAccessRules">reset_access_rules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetUnrestricted">reset_unrestricted</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_rules` <a name="put_access_rules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.putAccessRules"></a>

```python
def put_access_rules(
  value: typing.Union[IResolvable, typing.List[IdentityApplicationCredentialV3AccessRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.putAccessRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]

---

##### `reset_access_rules` <a name="reset_access_rules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetAccessRules"></a>

```python
def reset_access_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expires_at` <a name="reset_expires_at" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_roles` <a name="reset_roles" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_secret` <a name="reset_secret" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_unrestricted` <a name="reset_unrestricted" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetUnrestricted"></a>

```python
def reset_unrestricted() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityApplicationCredentialV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityApplicationCredentialV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityApplicationCredentialV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityApplicationCredentialV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityApplicationCredentialV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRules">access_rules</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList">IdentityApplicationCredentialV3AccessRulesList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRulesInput">access_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestrictedInput">unrestricted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestricted">unrestricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_rules`<sup>Required</sup> <a name="access_rules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRules"></a>

```python
access_rules: IdentityApplicationCredentialV3AccessRulesList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList">IdentityApplicationCredentialV3AccessRulesList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `access_rules_input`<sup>Optional</sup> <a name="access_rules_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRulesInput"></a>

```python
access_rules_input: typing.Union[IResolvable, typing.List[IdentityApplicationCredentialV3AccessRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `unrestricted_input`<sup>Optional</sup> <a name="unrestricted_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestrictedInput"></a>

```python
unrestricted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `unrestricted`<sup>Required</sup> <a name="unrestricted" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestricted"></a>

```python
unrestricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityApplicationCredentialV3AccessRules <a name="IdentityApplicationCredentialV3AccessRules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules(
  method: str,
  path: str,
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#method IdentityApplicationCredentialV3#method}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#path IdentityApplicationCredentialV3#path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#service IdentityApplicationCredentialV3#service}. |

---

##### `method`<sup>Required</sup> <a name="method" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#method IdentityApplicationCredentialV3#method}.

---

##### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#path IdentityApplicationCredentialV3#path}.

---

##### `service`<sup>Required</sup> <a name="service" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#service IdentityApplicationCredentialV3#service}.

---

### IdentityApplicationCredentialV3Config <a name="IdentityApplicationCredentialV3Config" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_rules: typing.Union[IResolvable, typing.List[IdentityApplicationCredentialV3AccessRules]] = None,
  description: str = None,
  expires_at: str = None,
  id: str = None,
  region: str = None,
  roles: typing.List[str] = None,
  secret: str = None,
  unrestricted: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#name IdentityApplicationCredentialV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.accessRules">access_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]</code> | access_rules block. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#description IdentityApplicationCredentialV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.expiresAt">expires_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#expires_at IdentityApplicationCredentialV3#expires_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#id IdentityApplicationCredentialV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#region IdentityApplicationCredentialV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#roles IdentityApplicationCredentialV3#roles}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#secret IdentityApplicationCredentialV3#secret}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.unrestricted">unrestricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#unrestricted IdentityApplicationCredentialV3#unrestricted}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#name IdentityApplicationCredentialV3#name}.

---

##### `access_rules`<sup>Optional</sup> <a name="access_rules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.accessRules"></a>

```python
access_rules: typing.Union[IResolvable, typing.List[IdentityApplicationCredentialV3AccessRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#access_rules IdentityApplicationCredentialV3#access_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#description IdentityApplicationCredentialV3#description}.

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#expires_at IdentityApplicationCredentialV3#expires_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#id IdentityApplicationCredentialV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#region IdentityApplicationCredentialV3#region}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#roles IdentityApplicationCredentialV3#roles}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#secret IdentityApplicationCredentialV3#secret}.

---

##### `unrestricted`<sup>Optional</sup> <a name="unrestricted" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.unrestricted"></a>

```python
unrestricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#unrestricted IdentityApplicationCredentialV3#unrestricted}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityApplicationCredentialV3AccessRulesList <a name="IdentityApplicationCredentialV3AccessRulesList" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityApplicationCredentialV3AccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityApplicationCredentialV3AccessRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]]

---


### IdentityApplicationCredentialV3AccessRulesOutputReference <a name="IdentityApplicationCredentialV3AccessRulesOutputReference" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_application_credential_v3

identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityApplicationCredentialV3AccessRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>]

---



