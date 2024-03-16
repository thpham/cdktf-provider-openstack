# `dataOpenstackIdentityProjectV3` Submodule <a name="`dataOpenstackIdentityProjectV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackIdentityProjectV3 <a name="DataOpenstackIdentityProjectV3" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3 openstack_identity_project_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_project_v3

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_domain: typing.Union[bool, IResolvable] = None,
  name: str = None,
  parent_id: str = None,
  project_id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#domain_id DataOpenstackIdentityProjectV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#enabled DataOpenstackIdentityProjectV3#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#id DataOpenstackIdentityProjectV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.isDomain">is_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#is_domain DataOpenstackIdentityProjectV3#is_domain}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#name DataOpenstackIdentityProjectV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#parent_id DataOpenstackIdentityProjectV3#parent_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#project_id DataOpenstackIdentityProjectV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#region DataOpenstackIdentityProjectV3#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#domain_id DataOpenstackIdentityProjectV3#domain_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#enabled DataOpenstackIdentityProjectV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#id DataOpenstackIdentityProjectV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_domain`<sup>Optional</sup> <a name="is_domain" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.isDomain"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#is_domain DataOpenstackIdentityProjectV3#is_domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#name DataOpenstackIdentityProjectV3#name}.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#parent_id DataOpenstackIdentityProjectV3#parent_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#project_id DataOpenstackIdentityProjectV3#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#region DataOpenstackIdentityProjectV3#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetIsDomain">reset_is_domain</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_domain_id` <a name="reset_domain_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_domain` <a name="reset_is_domain" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetIsDomain"></a>

```python
def reset_is_domain() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackIdentityProjectV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_project_v3

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_project_v3

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_project_v3

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_project_v3

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackIdentityProjectV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackIdentityProjectV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackIdentityProjectV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackIdentityProjectV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomainInput">is_domain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomain">is_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_domain_input`<sup>Optional</sup> <a name="is_domain_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomainInput"></a>

```python
is_domain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_domain`<sup>Required</sup> <a name="is_domain" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.isDomain"></a>

```python
is_domain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackIdentityProjectV3Config <a name="DataOpenstackIdentityProjectV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_project_v3

dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_domain: typing.Union[bool, IResolvable] = None,
  name: str = None,
  parent_id: str = None,
  project_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#domain_id DataOpenstackIdentityProjectV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#enabled DataOpenstackIdentityProjectV3#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#id DataOpenstackIdentityProjectV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.isDomain">is_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#is_domain DataOpenstackIdentityProjectV3#is_domain}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#name DataOpenstackIdentityProjectV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#parent_id DataOpenstackIdentityProjectV3#parent_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#project_id DataOpenstackIdentityProjectV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#region DataOpenstackIdentityProjectV3#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#domain_id DataOpenstackIdentityProjectV3#domain_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#enabled DataOpenstackIdentityProjectV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#id DataOpenstackIdentityProjectV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_domain`<sup>Optional</sup> <a name="is_domain" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.isDomain"></a>

```python
is_domain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#is_domain DataOpenstackIdentityProjectV3#is_domain}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#name DataOpenstackIdentityProjectV3#name}.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#parent_id DataOpenstackIdentityProjectV3#parent_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#project_id DataOpenstackIdentityProjectV3#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityProjectV3.DataOpenstackIdentityProjectV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_project_v3#region DataOpenstackIdentityProjectV3#region}.

---



