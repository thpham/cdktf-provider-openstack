# `dataOpenstackContainerinfraClustertemplateV1` Submodule <a name="`dataOpenstackContainerinfraClustertemplateV1` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackContainerinfraClustertemplateV1 <a name="DataOpenstackContainerinfraClustertemplateV1" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1 openstack_containerinfra_clustertemplate_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_clustertemplate_v1

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1(
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
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#name DataOpenstackContainerinfraClustertemplateV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#id DataOpenstackContainerinfraClustertemplateV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#region DataOpenstackContainerinfraClustertemplateV1#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#name DataOpenstackContainerinfraClustertemplateV1#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#id DataOpenstackContainerinfraClustertemplateV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#region DataOpenstackContainerinfraClustertemplateV1#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_clustertemplate_v1

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_clustertemplate_v1

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_clustertemplate_v1

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_clustertemplate_v1

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackContainerinfraClustertemplateV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackContainerinfraClustertemplateV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackContainerinfraClustertemplateV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.apiserverPort">apiserver_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.clusterDistro">cluster_distro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.coe">coe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dnsNameserver">dns_nameserver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerStorageDriver">docker_storage_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.externalNetworkId">external_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedNetwork">fixed_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedSubnet">fixed_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.floatingIpEnabled">floating_ip_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.hidden">hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpProxy">http_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpsProxy">https_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.insecureRegistry">insecure_registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.keypairId">keypair_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterFlavor">master_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterLbEnabled">master_lb_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.networkDriver">network_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.noProxy">no_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.registryEnabled">registry_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.serverType">server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tlsDisabled">tls_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.volumeDriver">volume_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `apiserver_port`<sup>Required</sup> <a name="apiserver_port" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.apiserverPort"></a>

```python
apiserver_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_distro`<sup>Required</sup> <a name="cluster_distro" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.clusterDistro"></a>

```python
cluster_distro: str
```

- *Type:* str

---

##### `coe`<sup>Required</sup> <a name="coe" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.coe"></a>

```python
coe: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dns_nameserver`<sup>Required</sup> <a name="dns_nameserver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dnsNameserver"></a>

```python
dns_nameserver: str
```

- *Type:* str

---

##### `docker_storage_driver`<sup>Required</sup> <a name="docker_storage_driver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerStorageDriver"></a>

```python
docker_storage_driver: str
```

- *Type:* str

---

##### `docker_volume_size`<sup>Required</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_network_id`<sup>Required</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.externalNetworkId"></a>

```python
external_network_id: str
```

- *Type:* str

---

##### `fixed_network`<sup>Required</sup> <a name="fixed_network" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedNetwork"></a>

```python
fixed_network: str
```

- *Type:* str

---

##### `fixed_subnet`<sup>Required</sup> <a name="fixed_subnet" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedSubnet"></a>

```python
fixed_subnet: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `floating_ip_enabled`<sup>Required</sup> <a name="floating_ip_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.floatingIpEnabled"></a>

```python
floating_ip_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.hidden"></a>

```python
hidden: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `http_proxy`<sup>Required</sup> <a name="http_proxy" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

---

##### `https_proxy`<sup>Required</sup> <a name="https_proxy" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `insecure_registry`<sup>Required</sup> <a name="insecure_registry" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.insecureRegistry"></a>

```python
insecure_registry: str
```

- *Type:* str

---

##### `keypair_id`<sup>Required</sup> <a name="keypair_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.keypairId"></a>

```python
keypair_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `master_flavor`<sup>Required</sup> <a name="master_flavor" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterFlavor"></a>

```python
master_flavor: str
```

- *Type:* str

---

##### `master_lb_enabled`<sup>Required</sup> <a name="master_lb_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterLbEnabled"></a>

```python
master_lb_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_driver`<sup>Required</sup> <a name="network_driver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.networkDriver"></a>

```python
network_driver: str
```

- *Type:* str

---

##### `no_proxy`<sup>Required</sup> <a name="no_proxy" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.noProxy"></a>

```python
no_proxy: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.public"></a>

```python
public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `registry_enabled`<sup>Required</sup> <a name="registry_enabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.registryEnabled"></a>

```python
registry_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `server_type`<sup>Required</sup> <a name="server_type" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

---

##### `tls_disabled`<sup>Required</sup> <a name="tls_disabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tlsDisabled"></a>

```python
tls_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `volume_driver`<sup>Required</sup> <a name="volume_driver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.volumeDriver"></a>

```python
volume_driver: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackContainerinfraClustertemplateV1Config <a name="DataOpenstackContainerinfraClustertemplateV1Config" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_clustertemplate_v1

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#name DataOpenstackContainerinfraClustertemplateV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#id DataOpenstackContainerinfraClustertemplateV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#region DataOpenstackContainerinfraClustertemplateV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#name DataOpenstackContainerinfraClustertemplateV1#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#id DataOpenstackContainerinfraClustertemplateV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#region DataOpenstackContainerinfraClustertemplateV1#region}.

---



