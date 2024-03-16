# `dataOpenstackContainerinfraNodegroupV1` Submodule <a name="`dataOpenstackContainerinfraNodegroupV1` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackContainerinfraNodegroupV1 <a name="DataOpenstackContainerinfraNodegroupV1" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1 openstack_containerinfra_nodegroup_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_nodegroup_v1

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  name: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#cluster_id DataOpenstackContainerinfraNodegroupV1#cluster_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#id DataOpenstackContainerinfraNodegroupV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#name DataOpenstackContainerinfraNodegroupV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#region DataOpenstackContainerinfraNodegroupV1#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#cluster_id DataOpenstackContainerinfraNodegroupV1#cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#id DataOpenstackContainerinfraNodegroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#name DataOpenstackContainerinfraNodegroupV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#region DataOpenstackContainerinfraNodegroupV1#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_nodegroup_v1

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_nodegroup_v1

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_nodegroup_v1

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_nodegroup_v1

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackContainerinfraNodegroupV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackContainerinfraNodegroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackContainerinfraNodegroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `docker_volume_size`<sup>Required</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackContainerinfraNodegroupV1Config <a name="DataOpenstackContainerinfraNodegroupV1Config" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_containerinfra_nodegroup_v1

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  id: str = None,
  name: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#cluster_id DataOpenstackContainerinfraNodegroupV1#cluster_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#id DataOpenstackContainerinfraNodegroupV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#name DataOpenstackContainerinfraNodegroupV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#region DataOpenstackContainerinfraNodegroupV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#cluster_id DataOpenstackContainerinfraNodegroupV1#cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#id DataOpenstackContainerinfraNodegroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#name DataOpenstackContainerinfraNodegroupV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#region DataOpenstackContainerinfraNodegroupV1#region}.

---



