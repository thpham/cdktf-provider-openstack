# `dataOpenstackIdentityEndpointV3` Submodule <a name="`dataOpenstackIdentityEndpointV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackIdentityEndpointV3 <a name="DataOpenstackIdentityEndpointV3" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3 openstack_identity_endpoint_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_endpoint_v3

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_region: str = None,
  id: str = None,
  interface: str = None,
  name: str = None,
  region: str = None,
  service_id: str = None,
  service_name: str = None,
  service_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.endpointRegion">endpoint_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#endpoint_region DataOpenstackIdentityEndpointV3#endpoint_region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#id DataOpenstackIdentityEndpointV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.interface">interface</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#interface DataOpenstackIdentityEndpointV3#interface}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#name DataOpenstackIdentityEndpointV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#region DataOpenstackIdentityEndpointV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_id DataOpenstackIdentityEndpointV3#service_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_name DataOpenstackIdentityEndpointV3#service_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_type DataOpenstackIdentityEndpointV3#service_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_region`<sup>Optional</sup> <a name="endpoint_region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.endpointRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#endpoint_region DataOpenstackIdentityEndpointV3#endpoint_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#id DataOpenstackIdentityEndpointV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.interface"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#interface DataOpenstackIdentityEndpointV3#interface}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#name DataOpenstackIdentityEndpointV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#region DataOpenstackIdentityEndpointV3#region}.

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_id DataOpenstackIdentityEndpointV3#service_id}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_name DataOpenstackIdentityEndpointV3#service_name}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.serviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_type DataOpenstackIdentityEndpointV3#service_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetEndpointRegion">reset_endpoint_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceId">reset_service_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceType">reset_service_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_endpoint_region` <a name="reset_endpoint_region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetEndpointRegion"></a>

```python
def reset_endpoint_region() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interface` <a name="reset_interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_id` <a name="reset_service_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceId"></a>

```python
def reset_service_id() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceType"></a>

```python
def reset_service_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpenstackIdentityEndpointV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_endpoint_v3

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_endpoint_v3

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformDataSource"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_endpoint_v3

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_endpoint_v3

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpenstackIdentityEndpointV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpenstackIdentityEndpointV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpenstackIdentityEndpointV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackIdentityEndpointV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegionInput">endpoint_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegion">endpoint_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `endpoint_region_input`<sup>Optional</sup> <a name="endpoint_region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegionInput"></a>

```python
endpoint_region_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `endpoint_region`<sup>Required</sup> <a name="endpoint_region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegion"></a>

```python
endpoint_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackIdentityEndpointV3Config <a name="DataOpenstackIdentityEndpointV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import data_openstack_identity_endpoint_v3

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_region: str = None,
  id: str = None,
  interface: str = None,
  name: str = None,
  region: str = None,
  service_id: str = None,
  service_name: str = None,
  service_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.endpointRegion">endpoint_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#endpoint_region DataOpenstackIdentityEndpointV3#endpoint_region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#id DataOpenstackIdentityEndpointV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.interface">interface</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#interface DataOpenstackIdentityEndpointV3#interface}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#name DataOpenstackIdentityEndpointV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#region DataOpenstackIdentityEndpointV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_id DataOpenstackIdentityEndpointV3#service_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_name DataOpenstackIdentityEndpointV3#service_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_type DataOpenstackIdentityEndpointV3#service_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_region`<sup>Optional</sup> <a name="endpoint_region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.endpointRegion"></a>

```python
endpoint_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#endpoint_region DataOpenstackIdentityEndpointV3#endpoint_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#id DataOpenstackIdentityEndpointV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.interface"></a>

```python
interface: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#interface DataOpenstackIdentityEndpointV3#interface}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#name DataOpenstackIdentityEndpointV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#region DataOpenstackIdentityEndpointV3#region}.

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_id DataOpenstackIdentityEndpointV3#service_id}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_name DataOpenstackIdentityEndpointV3#service_name}.

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_type DataOpenstackIdentityEndpointV3#service_type}.

---



