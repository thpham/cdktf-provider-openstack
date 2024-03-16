# `identityUserV3` Submodule <a name="`identityUserV3` Submodule" id="@ithings/cdktf-provider-openstack.identityUserV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityUserV3 <a name="IdentityUserV3" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3 openstack_identity_user_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_project_id: str = None,
  description: str = None,
  domain_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  extra: typing.Mapping[str] = None,
  id: str = None,
  ignore_change_password_upon_first_use: typing.Union[bool, IResolvable] = None,
  ignore_lockout_failure_attempts: typing.Union[bool, IResolvable] = None,
  ignore_password_expiry: typing.Union[bool, IResolvable] = None,
  multi_factor_auth_enabled: typing.Union[bool, IResolvable] = None,
  multi_factor_auth_rule: typing.Union[IResolvable, typing.List[IdentityUserV3MultiFactorAuthRule]] = None,
  name: str = None,
  password: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.defaultProjectId">default_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#default_project_id IdentityUserV3#default_project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#description IdentityUserV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#domain_id IdentityUserV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.extra">extra</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#extra IdentityUserV3#extra}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#id IdentityUserV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.ignoreChangePasswordUponFirstUse">ignore_change_password_upon_first_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_change_password_upon_first_use IdentityUserV3#ignore_change_password_upon_first_use}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.ignoreLockoutFailureAttempts">ignore_lockout_failure_attempts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_lockout_failure_attempts IdentityUserV3#ignore_lockout_failure_attempts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.ignorePasswordExpiry">ignore_password_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_password_expiry IdentityUserV3#ignore_password_expiry}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.multiFactorAuthEnabled">multi_factor_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_enabled IdentityUserV3#multi_factor_auth_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.multiFactorAuthRule">multi_factor_auth_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]</code> | multi_factor_auth_rule block. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#name IdentityUserV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#password IdentityUserV3#password}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#region IdentityUserV3#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_project_id`<sup>Optional</sup> <a name="default_project_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.defaultProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#default_project_id IdentityUserV3#default_project_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#description IdentityUserV3#description}.

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#domain_id IdentityUserV3#domain_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}.

---

##### `extra`<sup>Optional</sup> <a name="extra" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.extra"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#extra IdentityUserV3#extra}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#id IdentityUserV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_change_password_upon_first_use`<sup>Optional</sup> <a name="ignore_change_password_upon_first_use" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.ignoreChangePasswordUponFirstUse"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_change_password_upon_first_use IdentityUserV3#ignore_change_password_upon_first_use}.

---

##### `ignore_lockout_failure_attempts`<sup>Optional</sup> <a name="ignore_lockout_failure_attempts" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.ignoreLockoutFailureAttempts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_lockout_failure_attempts IdentityUserV3#ignore_lockout_failure_attempts}.

---

##### `ignore_password_expiry`<sup>Optional</sup> <a name="ignore_password_expiry" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.ignorePasswordExpiry"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_password_expiry IdentityUserV3#ignore_password_expiry}.

---

##### `multi_factor_auth_enabled`<sup>Optional</sup> <a name="multi_factor_auth_enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.multiFactorAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_enabled IdentityUserV3#multi_factor_auth_enabled}.

---

##### `multi_factor_auth_rule`<sup>Optional</sup> <a name="multi_factor_auth_rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.multiFactorAuthRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]

multi_factor_auth_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_rule IdentityUserV3#multi_factor_auth_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#name IdentityUserV3#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#password IdentityUserV3#password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#region IdentityUserV3#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.putMultiFactorAuthRule">put_multi_factor_auth_rule</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDefaultProjectId">reset_default_project_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetExtra">reset_extra</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreChangePasswordUponFirstUse">reset_ignore_change_password_upon_first_use</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreLockoutFailureAttempts">reset_ignore_lockout_failure_attempts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnorePasswordExpiry">reset_ignore_password_expiry</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthEnabled">reset_multi_factor_auth_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthRule">reset_multi_factor_auth_rule</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_multi_factor_auth_rule` <a name="put_multi_factor_auth_rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.putMultiFactorAuthRule"></a>

```python
def put_multi_factor_auth_rule(
  value: typing.Union[IResolvable, typing.List[IdentityUserV3MultiFactorAuthRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.putMultiFactorAuthRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]

---

##### `reset_default_project_id` <a name="reset_default_project_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDefaultProjectId"></a>

```python
def reset_default_project_id() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_id` <a name="reset_domain_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_extra` <a name="reset_extra" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetExtra"></a>

```python
def reset_extra() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_change_password_upon_first_use` <a name="reset_ignore_change_password_upon_first_use" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreChangePasswordUponFirstUse"></a>

```python
def reset_ignore_change_password_upon_first_use() -> None
```

##### `reset_ignore_lockout_failure_attempts` <a name="reset_ignore_lockout_failure_attempts" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreLockoutFailureAttempts"></a>

```python
def reset_ignore_lockout_failure_attempts() -> None
```

##### `reset_ignore_password_expiry` <a name="reset_ignore_password_expiry" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnorePasswordExpiry"></a>

```python
def reset_ignore_password_expiry() -> None
```

##### `reset_multi_factor_auth_enabled` <a name="reset_multi_factor_auth_enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthEnabled"></a>

```python
def reset_multi_factor_auth_enabled() -> None
```

##### `reset_multi_factor_auth_rule` <a name="reset_multi_factor_auth_rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthRule"></a>

```python
def reset_multi_factor_auth_rule() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_password` <a name="reset_password" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityUserV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityUserV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityUserV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityUserV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityUserV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRule">multi_factor_auth_rule</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList">IdentityUserV3MultiFactorAuthRuleList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectIdInput">default_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extraInput">extra_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUseInput">ignore_change_password_upon_first_use_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttemptsInput">ignore_lockout_failure_attempts_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiryInput">ignore_password_expiry_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabledInput">multi_factor_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRuleInput">multi_factor_auth_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectId">default_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extra">extra</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUse">ignore_change_password_upon_first_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttempts">ignore_lockout_failure_attempts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiry">ignore_password_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabled">multi_factor_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `multi_factor_auth_rule`<sup>Required</sup> <a name="multi_factor_auth_rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRule"></a>

```python
multi_factor_auth_rule: IdentityUserV3MultiFactorAuthRuleList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList">IdentityUserV3MultiFactorAuthRuleList</a>

---

##### `default_project_id_input`<sup>Optional</sup> <a name="default_project_id_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectIdInput"></a>

```python
default_project_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extra_input`<sup>Optional</sup> <a name="extra_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extraInput"></a>

```python
extra_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_change_password_upon_first_use_input`<sup>Optional</sup> <a name="ignore_change_password_upon_first_use_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUseInput"></a>

```python
ignore_change_password_upon_first_use_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_lockout_failure_attempts_input`<sup>Optional</sup> <a name="ignore_lockout_failure_attempts_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttemptsInput"></a>

```python
ignore_lockout_failure_attempts_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_password_expiry_input`<sup>Optional</sup> <a name="ignore_password_expiry_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiryInput"></a>

```python
ignore_password_expiry_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_factor_auth_enabled_input`<sup>Optional</sup> <a name="multi_factor_auth_enabled_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabledInput"></a>

```python
multi_factor_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_factor_auth_rule_input`<sup>Optional</sup> <a name="multi_factor_auth_rule_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRuleInput"></a>

```python
multi_factor_auth_rule_input: typing.Union[IResolvable, typing.List[IdentityUserV3MultiFactorAuthRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `default_project_id`<sup>Required</sup> <a name="default_project_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectId"></a>

```python
default_project_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extra`<sup>Required</sup> <a name="extra" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extra"></a>

```python
extra: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_change_password_upon_first_use`<sup>Required</sup> <a name="ignore_change_password_upon_first_use" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUse"></a>

```python
ignore_change_password_upon_first_use: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_lockout_failure_attempts`<sup>Required</sup> <a name="ignore_lockout_failure_attempts" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttempts"></a>

```python
ignore_lockout_failure_attempts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_password_expiry`<sup>Required</sup> <a name="ignore_password_expiry" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiry"></a>

```python
ignore_password_expiry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_factor_auth_enabled`<sup>Required</sup> <a name="multi_factor_auth_enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabled"></a>

```python
multi_factor_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityUserV3Config <a name="IdentityUserV3Config" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_project_id: str = None,
  description: str = None,
  domain_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  extra: typing.Mapping[str] = None,
  id: str = None,
  ignore_change_password_upon_first_use: typing.Union[bool, IResolvable] = None,
  ignore_lockout_failure_attempts: typing.Union[bool, IResolvable] = None,
  ignore_password_expiry: typing.Union[bool, IResolvable] = None,
  multi_factor_auth_enabled: typing.Union[bool, IResolvable] = None,
  multi_factor_auth_rule: typing.Union[IResolvable, typing.List[IdentityUserV3MultiFactorAuthRule]] = None,
  name: str = None,
  password: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.defaultProjectId">default_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#default_project_id IdentityUserV3#default_project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#description IdentityUserV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#domain_id IdentityUserV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.extra">extra</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#extra IdentityUserV3#extra}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#id IdentityUserV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreChangePasswordUponFirstUse">ignore_change_password_upon_first_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_change_password_upon_first_use IdentityUserV3#ignore_change_password_upon_first_use}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreLockoutFailureAttempts">ignore_lockout_failure_attempts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_lockout_failure_attempts IdentityUserV3#ignore_lockout_failure_attempts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignorePasswordExpiry">ignore_password_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_password_expiry IdentityUserV3#ignore_password_expiry}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthEnabled">multi_factor_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_enabled IdentityUserV3#multi_factor_auth_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthRule">multi_factor_auth_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]</code> | multi_factor_auth_rule block. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#name IdentityUserV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#password IdentityUserV3#password}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#region IdentityUserV3#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_project_id`<sup>Optional</sup> <a name="default_project_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.defaultProjectId"></a>

```python
default_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#default_project_id IdentityUserV3#default_project_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#description IdentityUserV3#description}.

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#domain_id IdentityUserV3#domain_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}.

---

##### `extra`<sup>Optional</sup> <a name="extra" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.extra"></a>

```python
extra: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#extra IdentityUserV3#extra}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#id IdentityUserV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_change_password_upon_first_use`<sup>Optional</sup> <a name="ignore_change_password_upon_first_use" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreChangePasswordUponFirstUse"></a>

```python
ignore_change_password_upon_first_use: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_change_password_upon_first_use IdentityUserV3#ignore_change_password_upon_first_use}.

---

##### `ignore_lockout_failure_attempts`<sup>Optional</sup> <a name="ignore_lockout_failure_attempts" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreLockoutFailureAttempts"></a>

```python
ignore_lockout_failure_attempts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_lockout_failure_attempts IdentityUserV3#ignore_lockout_failure_attempts}.

---

##### `ignore_password_expiry`<sup>Optional</sup> <a name="ignore_password_expiry" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignorePasswordExpiry"></a>

```python
ignore_password_expiry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_password_expiry IdentityUserV3#ignore_password_expiry}.

---

##### `multi_factor_auth_enabled`<sup>Optional</sup> <a name="multi_factor_auth_enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthEnabled"></a>

```python
multi_factor_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_enabled IdentityUserV3#multi_factor_auth_enabled}.

---

##### `multi_factor_auth_rule`<sup>Optional</sup> <a name="multi_factor_auth_rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthRule"></a>

```python
multi_factor_auth_rule: typing.Union[IResolvable, typing.List[IdentityUserV3MultiFactorAuthRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]

multi_factor_auth_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_rule IdentityUserV3#multi_factor_auth_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#name IdentityUserV3#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#password IdentityUserV3#password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#region IdentityUserV3#region}.

---

### IdentityUserV3MultiFactorAuthRule <a name="IdentityUserV3MultiFactorAuthRule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3MultiFactorAuthRule(
  rule: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule.property.rule">rule</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#rule IdentityUserV3#rule}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule.property.rule"></a>

```python
rule: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#rule IdentityUserV3#rule}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityUserV3MultiFactorAuthRuleList <a name="IdentityUserV3MultiFactorAuthRuleList" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3MultiFactorAuthRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentityUserV3MultiFactorAuthRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IdentityUserV3MultiFactorAuthRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]]

---


### IdentityUserV3MultiFactorAuthRuleOutputReference <a name="IdentityUserV3MultiFactorAuthRuleOutputReference" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import identity_user_v3

identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.rule">rule</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.ruleInput"></a>

```python
rule_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.rule"></a>

```python
rule: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityUserV3MultiFactorAuthRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>]

---



