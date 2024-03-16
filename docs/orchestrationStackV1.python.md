# `orchestrationStackV1` Submodule <a name="`orchestrationStackV1` Submodule" id="@ithings/cdktf-provider-openstack.orchestrationStackV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrchestrationStackV1 <a name="OrchestrationStackV1" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1 openstack_orchestration_stack_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1(
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
  template_opts: typing.Mapping[str],
  capabilities: typing.List[str] = None,
  creation_time: str = None,
  description: str = None,
  disable_rollback: typing.Union[bool, IResolvable] = None,
  environment_opts: typing.Mapping[str] = None,
  id: str = None,
  notification_topics: typing.List[str] = None,
  outputs: typing.Union[IResolvable, typing.List[OrchestrationStackV1Outputs]] = None,
  parameters: typing.Mapping[str] = None,
  region: str = None,
  status: str = None,
  status_reason: str = None,
  tags: typing.List[str] = None,
  template_description: str = None,
  timeout: typing.Union[int, float] = None,
  timeouts: OrchestrationStackV1Timeouts = None,
  updated_time: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#name OrchestrationStackV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.templateOpts">template_opts</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_opts OrchestrationStackV1#template_opts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#capabilities OrchestrationStackV1#capabilities}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.creationTime">creation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#creation_time OrchestrationStackV1#creation_time}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.disableRollback">disable_rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#disable_rollback OrchestrationStackV1#disable_rollback}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.environmentOpts">environment_opts</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#environment_opts OrchestrationStackV1#environment_opts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#id OrchestrationStackV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.notificationTopics">notification_topics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#notification_topics OrchestrationStackV1#notification_topics}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.outputs">outputs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]</code> | outputs block. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#parameters OrchestrationStackV1#parameters}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#region OrchestrationStackV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status OrchestrationStackV1#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.statusReason">status_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status_reason OrchestrationStackV1#status_reason}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#tags OrchestrationStackV1#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.templateDescription">template_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_description OrchestrationStackV1#template_description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeout OrchestrationStackV1#timeout}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.updatedTime">updated_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#updated_time OrchestrationStackV1#updated_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#name OrchestrationStackV1#name}.

---

##### `template_opts`<sup>Required</sup> <a name="template_opts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.templateOpts"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_opts OrchestrationStackV1#template_opts}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#capabilities OrchestrationStackV1#capabilities}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.creationTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#creation_time OrchestrationStackV1#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}.

---

##### `disable_rollback`<sup>Optional</sup> <a name="disable_rollback" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.disableRollback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#disable_rollback OrchestrationStackV1#disable_rollback}.

---

##### `environment_opts`<sup>Optional</sup> <a name="environment_opts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.environmentOpts"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#environment_opts OrchestrationStackV1#environment_opts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#id OrchestrationStackV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_topics`<sup>Optional</sup> <a name="notification_topics" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.notificationTopics"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#notification_topics OrchestrationStackV1#notification_topics}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.outputs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]

outputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#outputs OrchestrationStackV1#outputs}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#parameters OrchestrationStackV1#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#region OrchestrationStackV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status OrchestrationStackV1#status}.

---

##### `status_reason`<sup>Optional</sup> <a name="status_reason" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.statusReason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status_reason OrchestrationStackV1#status_reason}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#tags OrchestrationStackV1#tags}.

---

##### `template_description`<sup>Optional</sup> <a name="template_description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.templateDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_description OrchestrationStackV1#template_description}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeout OrchestrationStackV1#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeouts OrchestrationStackV1#timeouts}

---

##### `updated_time`<sup>Optional</sup> <a name="updated_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.updatedTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#updated_time OrchestrationStackV1#updated_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDisableRollback">reset_disable_rollback</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetEnvironmentOpts">reset_environment_opts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetNotificationTopics">reset_notification_topics</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOutputs">reset_outputs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatusReason">reset_status_reason</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTemplateDescription">reset_template_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetUpdatedTime">reset_updated_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_outputs` <a name="put_outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putOutputs"></a>

```python
def put_outputs(
  value: typing.Union[IResolvable, typing.List[OrchestrationStackV1Outputs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putOutputs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#create OrchestrationStackV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#delete OrchestrationStackV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#update OrchestrationStackV1#update}.

---

##### `reset_capabilities` <a name="reset_capabilities" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_rollback` <a name="reset_disable_rollback" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDisableRollback"></a>

```python
def reset_disable_rollback() -> None
```

##### `reset_environment_opts` <a name="reset_environment_opts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetEnvironmentOpts"></a>

```python
def reset_environment_opts() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_topics` <a name="reset_notification_topics" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetNotificationTopics"></a>

```python
def reset_notification_topics() -> None
```

##### `reset_outputs` <a name="reset_outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOutputs"></a>

```python
def reset_outputs() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_status` <a name="reset_status" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_status_reason` <a name="reset_status_reason" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatusReason"></a>

```python
def reset_status_reason() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_description` <a name="reset_template_description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTemplateDescription"></a>

```python
def reset_template_description() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_updated_time` <a name="reset_updated_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetUpdatedTime"></a>

```python
def reset_updated_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrchestrationStackV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrchestrationStackV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrchestrationStackV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrchestrationStackV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrchestrationStackV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputs">outputs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList">OrchestrationStackV1OutputsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference">OrchestrationStackV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTimeInput">creation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollbackInput">disable_rollback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOptsInput">environment_opts_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopicsInput">notification_topics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputsInput">outputs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReasonInput">status_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescriptionInput">template_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOptsInput">template_opts_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTimeInput">updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollback">disable_rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOpts">environment_opts</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopics">notification_topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescription">template_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOpts">template_opts</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTime">updated_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputs"></a>

```python
outputs: OrchestrationStackV1OutputsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList">OrchestrationStackV1OutputsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeouts"></a>

```python
timeouts: OrchestrationStackV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference">OrchestrationStackV1TimeoutsOutputReference</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTimeInput"></a>

```python
creation_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_rollback_input`<sup>Optional</sup> <a name="disable_rollback_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollbackInput"></a>

```python
disable_rollback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_opts_input`<sup>Optional</sup> <a name="environment_opts_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOptsInput"></a>

```python
environment_opts_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_topics_input`<sup>Optional</sup> <a name="notification_topics_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopicsInput"></a>

```python
notification_topics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputsInput"></a>

```python
outputs_input: typing.Union[IResolvable, typing.List[OrchestrationStackV1Outputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status_reason_input`<sup>Optional</sup> <a name="status_reason_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReasonInput"></a>

```python
status_reason_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_description_input`<sup>Optional</sup> <a name="template_description_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescriptionInput"></a>

```python
template_description_input: str
```

- *Type:* str

---

##### `template_opts_input`<sup>Optional</sup> <a name="template_opts_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOptsInput"></a>

```python
template_opts_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OrchestrationStackV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>]

---

##### `updated_time_input`<sup>Optional</sup> <a name="updated_time_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTimeInput"></a>

```python
updated_time_input: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_rollback`<sup>Required</sup> <a name="disable_rollback" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollback"></a>

```python
disable_rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_opts`<sup>Required</sup> <a name="environment_opts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOpts"></a>

```python
environment_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_topics`<sup>Required</sup> <a name="notification_topics" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopics"></a>

```python
notification_topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_description`<sup>Required</sup> <a name="template_description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescription"></a>

```python
template_description: str
```

- *Type:* str

---

##### `template_opts`<sup>Required</sup> <a name="template_opts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOpts"></a>

```python
template_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_time`<sup>Required</sup> <a name="updated_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTime"></a>

```python
updated_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrchestrationStackV1Config <a name="OrchestrationStackV1Config" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  template_opts: typing.Mapping[str],
  capabilities: typing.List[str] = None,
  creation_time: str = None,
  description: str = None,
  disable_rollback: typing.Union[bool, IResolvable] = None,
  environment_opts: typing.Mapping[str] = None,
  id: str = None,
  notification_topics: typing.List[str] = None,
  outputs: typing.Union[IResolvable, typing.List[OrchestrationStackV1Outputs]] = None,
  parameters: typing.Mapping[str] = None,
  region: str = None,
  status: str = None,
  status_reason: str = None,
  tags: typing.List[str] = None,
  template_description: str = None,
  timeout: typing.Union[int, float] = None,
  timeouts: OrchestrationStackV1Timeouts = None,
  updated_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#name OrchestrationStackV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateOpts">template_opts</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_opts OrchestrationStackV1#template_opts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#capabilities OrchestrationStackV1#capabilities}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.creationTime">creation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#creation_time OrchestrationStackV1#creation_time}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.disableRollback">disable_rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#disable_rollback OrchestrationStackV1#disable_rollback}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.environmentOpts">environment_opts</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#environment_opts OrchestrationStackV1#environment_opts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#id OrchestrationStackV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.notificationTopics">notification_topics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#notification_topics OrchestrationStackV1#notification_topics}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.outputs">outputs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]</code> | outputs block. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#parameters OrchestrationStackV1#parameters}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#region OrchestrationStackV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status OrchestrationStackV1#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.statusReason">status_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status_reason OrchestrationStackV1#status_reason}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#tags OrchestrationStackV1#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateDescription">template_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_description OrchestrationStackV1#template_description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeout OrchestrationStackV1#timeout}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.updatedTime">updated_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#updated_time OrchestrationStackV1#updated_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#name OrchestrationStackV1#name}.

---

##### `template_opts`<sup>Required</sup> <a name="template_opts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateOpts"></a>

```python
template_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_opts OrchestrationStackV1#template_opts}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#capabilities OrchestrationStackV1#capabilities}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#creation_time OrchestrationStackV1#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}.

---

##### `disable_rollback`<sup>Optional</sup> <a name="disable_rollback" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.disableRollback"></a>

```python
disable_rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#disable_rollback OrchestrationStackV1#disable_rollback}.

---

##### `environment_opts`<sup>Optional</sup> <a name="environment_opts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.environmentOpts"></a>

```python
environment_opts: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#environment_opts OrchestrationStackV1#environment_opts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#id OrchestrationStackV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_topics`<sup>Optional</sup> <a name="notification_topics" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.notificationTopics"></a>

```python
notification_topics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#notification_topics OrchestrationStackV1#notification_topics}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.outputs"></a>

```python
outputs: typing.Union[IResolvable, typing.List[OrchestrationStackV1Outputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]

outputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#outputs OrchestrationStackV1#outputs}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#parameters OrchestrationStackV1#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#region OrchestrationStackV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status OrchestrationStackV1#status}.

---

##### `status_reason`<sup>Optional</sup> <a name="status_reason" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status_reason OrchestrationStackV1#status_reason}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#tags OrchestrationStackV1#tags}.

---

##### `template_description`<sup>Optional</sup> <a name="template_description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateDescription"></a>

```python
template_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_description OrchestrationStackV1#template_description}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeout OrchestrationStackV1#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeouts"></a>

```python
timeouts: OrchestrationStackV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeouts OrchestrationStackV1#timeouts}

---

##### `updated_time`<sup>Optional</sup> <a name="updated_time" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.updatedTime"></a>

```python
updated_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#updated_time OrchestrationStackV1#updated_time}.

---

### OrchestrationStackV1Outputs <a name="OrchestrationStackV1Outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1Outputs(
  output_key: str,
  output_value: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputKey">output_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_key OrchestrationStackV1#output_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputValue">output_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_value OrchestrationStackV1#output_value}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}. |

---

##### `output_key`<sup>Required</sup> <a name="output_key" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputKey"></a>

```python
output_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_key OrchestrationStackV1#output_key}.

---

##### `output_value`<sup>Required</sup> <a name="output_value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputValue"></a>

```python
output_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_value OrchestrationStackV1#output_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}.

---

### OrchestrationStackV1Timeouts <a name="OrchestrationStackV1Timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#create OrchestrationStackV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#delete OrchestrationStackV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#update OrchestrationStackV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#create OrchestrationStackV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#delete OrchestrationStackV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#update OrchestrationStackV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrchestrationStackV1OutputsList <a name="OrchestrationStackV1OutputsList" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1OutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrchestrationStackV1OutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrchestrationStackV1Outputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]]

---


### OrchestrationStackV1OutputsOutputReference <a name="OrchestrationStackV1OutputsOutputReference" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1OutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKeyInput">output_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValueInput">output_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKey">output_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValue">output_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `output_key_input`<sup>Optional</sup> <a name="output_key_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKeyInput"></a>

```python
output_key_input: str
```

- *Type:* str

---

##### `output_value_input`<sup>Optional</sup> <a name="output_value_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValueInput"></a>

```python
output_value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `output_key`<sup>Required</sup> <a name="output_key" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKey"></a>

```python
output_key: str
```

- *Type:* str

---

##### `output_value`<sup>Required</sup> <a name="output_value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValue"></a>

```python
output_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrchestrationStackV1Outputs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>]

---


### OrchestrationStackV1TimeoutsOutputReference <a name="OrchestrationStackV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import orchestration_stack_v1

orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrchestrationStackV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>]

---



