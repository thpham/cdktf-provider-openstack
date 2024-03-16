# `dataOpenstackIdentityAuthScopeV3` Submodule <a name="`dataOpenstackIdentityAuthScopeV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackIdentityAuthScopeV3 <a name="DataOpenstackIdentityAuthScopeV3" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3 openstack_identity_auth_scope_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3(
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
  region: str = None,
  set_token_id: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#name DataOpenstackIdentityAuthScopeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#id DataOpenstackIdentityAuthScopeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#region DataOpenstackIdentityAuthScopeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.setTokenId">set_token_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#set_token_id DataOpenstackIdentityAuthScopeV3#set_token_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#name DataOpenstackIdentityAuthScopeV3#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#id DataOpenstackIdentityAuthScopeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#region DataOpenstackIdentityAuthScopeV3#region}.

---

##### `set_token_id`<sup>Optional</sup> <a name="set_token_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.Initializer.parameter.setTokenId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#set_token_id DataOpenstackIdentityAuthScopeV3#set_token_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetSetTokenId">reset_set_token_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_set_token_id` <a name="reset_set_token_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.resetSetTokenId"></a>

```python
def reset_set_token_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackIdentityAuthScopeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackIdentityAuthScopeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackIdentityAuthScopeV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackIdentityAuthScopeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackIdentityAuthScopeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainId">project_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainName">project_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.roles">roles</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList">DataOpenstackIdentityAuthScopeV3RolesList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.serviceCatalog">service_catalog</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList">DataOpenstackIdentityAuthScopeV3ServiceCatalogList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tokenId">token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainId">user_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainName">user_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenIdInput">set_token_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenId">set_token_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `project_domain_id`<sup>Required</sup> <a name="project_domain_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainId"></a>

```python
project_domain_id: str
```

- *Type:* str

---

##### `project_domain_name`<sup>Required</sup> <a name="project_domain_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectDomainName"></a>

```python
project_domain_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.roles"></a>

```python
roles: DataOpenstackIdentityAuthScopeV3RolesList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList">DataOpenstackIdentityAuthScopeV3RolesList</a>

---

##### `service_catalog`<sup>Required</sup> <a name="service_catalog" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.serviceCatalog"></a>

```python
service_catalog: DataOpenstackIdentityAuthScopeV3ServiceCatalogList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList">DataOpenstackIdentityAuthScopeV3ServiceCatalogList</a>

---

##### `token_id`<sup>Required</sup> <a name="token_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tokenId"></a>

```python
token_id: str
```

- *Type:* str

---

##### `user_domain_id`<sup>Required</sup> <a name="user_domain_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainId"></a>

```python
user_domain_id: str
```

- *Type:* str

---

##### `user_domain_name`<sup>Required</sup> <a name="user_domain_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userDomainName"></a>

```python
user_domain_name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `set_token_id_input`<sup>Optional</sup> <a name="set_token_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenIdInput"></a>

```python
set_token_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `set_token_id`<sup>Required</sup> <a name="set_token_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.setTokenId"></a>

```python
set_token_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackIdentityAuthScopeV3Config <a name="DataOpenstackIdentityAuthScopeV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  region: str = None,
  set_token_id: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#name DataOpenstackIdentityAuthScopeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#id DataOpenstackIdentityAuthScopeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#region DataOpenstackIdentityAuthScopeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.setTokenId">set_token_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#set_token_id DataOpenstackIdentityAuthScopeV3#set_token_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#name DataOpenstackIdentityAuthScopeV3#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#id DataOpenstackIdentityAuthScopeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#region DataOpenstackIdentityAuthScopeV3#region}.

---

##### `set_token_id`<sup>Optional</sup> <a name="set_token_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Config.property.setTokenId"></a>

```python
set_token_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_auth_scope_v3#set_token_id DataOpenstackIdentityAuthScopeV3#set_token_id}.

---

### DataOpenstackIdentityAuthScopeV3Roles <a name="DataOpenstackIdentityAuthScopeV3Roles" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles()
```


### DataOpenstackIdentityAuthScopeV3ServiceCatalog <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalog" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog()
```


### DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackIdentityAuthScopeV3RolesList <a name="DataOpenstackIdentityAuthScopeV3RolesList" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackIdentityAuthScopeV3RolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackIdentityAuthScopeV3RolesOutputReference <a name="DataOpenstackIdentityAuthScopeV3RolesOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles">DataOpenstackIdentityAuthScopeV3Roles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3RolesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackIdentityAuthScopeV3Roles
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3Roles">DataOpenstackIdentityAuthScopeV3Roles</a>

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.regionId">region_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `region_id`<sup>Required</sup> <a name="region_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.regionId"></a>

```python
region_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpoints</a>

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogList <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogList" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference <a name="DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_auth_scope_v3

dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog">DataOpenstackIdentityAuthScopeV3ServiceCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.endpoints"></a>

```python
endpoints: DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList">DataOpenstackIdentityAuthScopeV3ServiceCatalogEndpointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataOpenstackIdentityAuthScopeV3ServiceCatalog
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityAuthScopeV3.DataOpenstackIdentityAuthScopeV3ServiceCatalog">DataOpenstackIdentityAuthScopeV3ServiceCatalog</a>

---



