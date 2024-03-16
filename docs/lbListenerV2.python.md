# `lbListenerV2` Submodule <a name="`lbListenerV2` Submodule" id="@ithings/cdktf-provider-openstack.lbListenerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV2 <a name="LbListenerV2" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2 openstack_lb_listener_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer_id: str,
  protocol: str,
  protocol_port: typing.Union[int, float],
  admin_state_up: typing.Union[bool, IResolvable] = None,
  allowed_cidrs: typing.List[str] = None,
  connection_limit: typing.Union[int, float] = None,
  default_pool_id: str = None,
  default_tls_container_ref: str = None,
  description: str = None,
  id: str = None,
  insert_headers: typing.Mapping[str] = None,
  name: str = None,
  region: str = None,
  sni_container_refs: typing.List[str] = None,
  tags: typing.List[str] = None,
  tenant_id: str = None,
  timeout_client_data: typing.Union[int, float] = None,
  timeout_member_connect: typing.Union[int, float] = None,
  timeout_member_data: typing.Union[int, float] = None,
  timeouts: LbListenerV2Timeouts = None,
  timeout_tcp_inspect: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.allowedCidrs">allowed_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#allowed_cidrs LbListenerV2#allowed_cidrs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#connection_limit LbListenerV2#connection_limit}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.defaultPoolId">default_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.defaultTlsContainerRef">default_tls_container_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#description LbListenerV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#id LbListenerV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.insertHeaders">insert_headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#insert_headers LbListenerV2#insert_headers}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#name LbListenerV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#region LbListenerV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.sniContainerRefs">sni_container_refs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tags LbListenerV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutClientData">timeout_client_data</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_client_data LbListenerV2#timeout_client_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutMemberConnect">timeout_member_connect</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_connect LbListenerV2#timeout_member_connect}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutMemberData">timeout_member_data</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_data LbListenerV2#timeout_member_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutTcpInspect">timeout_tcp_inspect</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_tcp_inspect LbListenerV2#timeout_tcp_inspect}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.loadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}.

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.protocolPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}.

---

##### `allowed_cidrs`<sup>Optional</sup> <a name="allowed_cidrs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.allowedCidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#allowed_cidrs LbListenerV2#allowed_cidrs}.

---

##### `connection_limit`<sup>Optional</sup> <a name="connection_limit" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.connectionLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#connection_limit LbListenerV2#connection_limit}.

---

##### `default_pool_id`<sup>Optional</sup> <a name="default_pool_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.defaultPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}.

---

##### `default_tls_container_ref`<sup>Optional</sup> <a name="default_tls_container_ref" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.defaultTlsContainerRef"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#description LbListenerV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#id LbListenerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insert_headers`<sup>Optional</sup> <a name="insert_headers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.insertHeaders"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#insert_headers LbListenerV2#insert_headers}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#name LbListenerV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#region LbListenerV2#region}.

---

##### `sni_container_refs`<sup>Optional</sup> <a name="sni_container_refs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.sniContainerRefs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tags LbListenerV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}.

---

##### `timeout_client_data`<sup>Optional</sup> <a name="timeout_client_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutClientData"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_client_data LbListenerV2#timeout_client_data}.

---

##### `timeout_member_connect`<sup>Optional</sup> <a name="timeout_member_connect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutMemberConnect"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_connect LbListenerV2#timeout_member_connect}.

---

##### `timeout_member_data`<sup>Optional</sup> <a name="timeout_member_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutMemberData"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_data LbListenerV2#timeout_member_data}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeouts LbListenerV2#timeouts}

---

##### `timeout_tcp_inspect`<sup>Optional</sup> <a name="timeout_tcp_inspect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.timeoutTcpInspect"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_tcp_inspect LbListenerV2#timeout_tcp_inspect}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAllowedCidrs">reset_allowed_cidrs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetConnectionLimit">reset_connection_limit</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultPoolId">reset_default_pool_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultTlsContainerRef">reset_default_tls_container_ref</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetInsertHeaders">reset_insert_headers</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetSniContainerRefs">reset_sni_container_refs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutClientData">reset_timeout_client_data</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberConnect">reset_timeout_member_connect</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberData">reset_timeout_member_data</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutTcpInspect">reset_timeout_tcp_inspect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#create LbListenerV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#delete LbListenerV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#update LbListenerV2#update}.

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_allowed_cidrs` <a name="reset_allowed_cidrs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAllowedCidrs"></a>

```python
def reset_allowed_cidrs() -> None
```

##### `reset_connection_limit` <a name="reset_connection_limit" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetConnectionLimit"></a>

```python
def reset_connection_limit() -> None
```

##### `reset_default_pool_id` <a name="reset_default_pool_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultPoolId"></a>

```python
def reset_default_pool_id() -> None
```

##### `reset_default_tls_container_ref` <a name="reset_default_tls_container_ref" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultTlsContainerRef"></a>

```python
def reset_default_tls_container_ref() -> None
```

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insert_headers` <a name="reset_insert_headers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetInsertHeaders"></a>

```python
def reset_insert_headers() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_sni_container_refs` <a name="reset_sni_container_refs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetSniContainerRefs"></a>

```python
def reset_sni_container_refs() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeout_client_data` <a name="reset_timeout_client_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutClientData"></a>

```python
def reset_timeout_client_data() -> None
```

##### `reset_timeout_member_connect` <a name="reset_timeout_member_connect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberConnect"></a>

```python
def reset_timeout_member_connect() -> None
```

##### `reset_timeout_member_data` <a name="reset_timeout_member_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberData"></a>

```python
def reset_timeout_member_data() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timeout_tcp_inspect` <a name="reset_timeout_tcp_inspect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutTcpInspect"></a>

```python
def reset_timeout_tcp_inspect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbListenerV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbListenerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference">LbListenerV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrsInput">allowed_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimitInput">connection_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolIdInput">default_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRefInput">default_tls_container_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeadersInput">insert_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerIdInput">loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPortInput">protocol_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefsInput">sni_container_refs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientDataInput">timeout_client_data_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnectInput">timeout_member_connect_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberDataInput">timeout_member_data_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspectInput">timeout_tcp_inspect_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrs">allowed_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolId">default_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRef">default_tls_container_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeaders">insert_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefs">sni_container_refs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientData">timeout_client_data</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnect">timeout_member_connect</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberData">timeout_member_data</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspect">timeout_tcp_inspect</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeouts"></a>

```python
timeouts: LbListenerV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference">LbListenerV2TimeoutsOutputReference</a>

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_cidrs_input`<sup>Optional</sup> <a name="allowed_cidrs_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrsInput"></a>

```python
allowed_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_limit_input`<sup>Optional</sup> <a name="connection_limit_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimitInput"></a>

```python
connection_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_pool_id_input`<sup>Optional</sup> <a name="default_pool_id_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolIdInput"></a>

```python
default_pool_id_input: str
```

- *Type:* str

---

##### `default_tls_container_ref_input`<sup>Optional</sup> <a name="default_tls_container_ref_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRefInput"></a>

```python
default_tls_container_ref_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insert_headers_input`<sup>Optional</sup> <a name="insert_headers_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeadersInput"></a>

```python
insert_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `loadbalancer_id_input`<sup>Optional</sup> <a name="loadbalancer_id_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerIdInput"></a>

```python
loadbalancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol_port_input`<sup>Optional</sup> <a name="protocol_port_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPortInput"></a>

```python
protocol_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `sni_container_refs_input`<sup>Optional</sup> <a name="sni_container_refs_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefsInput"></a>

```python
sni_container_refs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeout_client_data_input`<sup>Optional</sup> <a name="timeout_client_data_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientDataInput"></a>

```python
timeout_client_data_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_member_connect_input`<sup>Optional</sup> <a name="timeout_member_connect_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnectInput"></a>

```python
timeout_member_connect_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_member_data_input`<sup>Optional</sup> <a name="timeout_member_data_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberDataInput"></a>

```python
timeout_member_data_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbListenerV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>]

---

##### `timeout_tcp_inspect_input`<sup>Optional</sup> <a name="timeout_tcp_inspect_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspectInput"></a>

```python
timeout_tcp_inspect_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_cidrs`<sup>Required</sup> <a name="allowed_cidrs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrs"></a>

```python
allowed_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_limit`<sup>Required</sup> <a name="connection_limit" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_pool_id`<sup>Required</sup> <a name="default_pool_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolId"></a>

```python
default_pool_id: str
```

- *Type:* str

---

##### `default_tls_container_ref`<sup>Required</sup> <a name="default_tls_container_ref" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRef"></a>

```python
default_tls_container_ref: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insert_headers`<sup>Required</sup> <a name="insert_headers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeaders"></a>

```python
insert_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPort"></a>

```python
protocol_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `sni_container_refs`<sup>Required</sup> <a name="sni_container_refs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefs"></a>

```python
sni_container_refs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `timeout_client_data`<sup>Required</sup> <a name="timeout_client_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientData"></a>

```python
timeout_client_data: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_member_connect`<sup>Required</sup> <a name="timeout_member_connect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnect"></a>

```python
timeout_member_connect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_member_data`<sup>Required</sup> <a name="timeout_member_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberData"></a>

```python
timeout_member_data: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_tcp_inspect`<sup>Required</sup> <a name="timeout_tcp_inspect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspect"></a>

```python
timeout_tcp_inspect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV2Config <a name="LbListenerV2Config" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer_id: str,
  protocol: str,
  protocol_port: typing.Union[int, float],
  admin_state_up: typing.Union[bool, IResolvable] = None,
  allowed_cidrs: typing.List[str] = None,
  connection_limit: typing.Union[int, float] = None,
  default_pool_id: str = None,
  default_tls_container_ref: str = None,
  description: str = None,
  id: str = None,
  insert_headers: typing.Mapping[str] = None,
  name: str = None,
  region: str = None,
  sni_container_refs: typing.List[str] = None,
  tags: typing.List[str] = None,
  tenant_id: str = None,
  timeout_client_data: typing.Union[int, float] = None,
  timeout_member_connect: typing.Union[int, float] = None,
  timeout_member_data: typing.Union[int, float] = None,
  timeouts: LbListenerV2Timeouts = None,
  timeout_tcp_inspect: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.allowedCidrs">allowed_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#allowed_cidrs LbListenerV2#allowed_cidrs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connectionLimit">connection_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#connection_limit LbListenerV2#connection_limit}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultPoolId">default_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultTlsContainerRef">default_tls_container_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#description LbListenerV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#id LbListenerV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.insertHeaders">insert_headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#insert_headers LbListenerV2#insert_headers}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#name LbListenerV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#region LbListenerV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.sniContainerRefs">sni_container_refs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tags LbListenerV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutClientData">timeout_client_data</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_client_data LbListenerV2#timeout_client_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberConnect">timeout_member_connect</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_connect LbListenerV2#timeout_member_connect}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberData">timeout_member_data</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_data LbListenerV2#timeout_member_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutTcpInspect">timeout_tcp_inspect</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_tcp_inspect LbListenerV2#timeout_tcp_inspect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}.

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocolPort"></a>

```python
protocol_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}.

---

##### `allowed_cidrs`<sup>Optional</sup> <a name="allowed_cidrs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.allowedCidrs"></a>

```python
allowed_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#allowed_cidrs LbListenerV2#allowed_cidrs}.

---

##### `connection_limit`<sup>Optional</sup> <a name="connection_limit" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connectionLimit"></a>

```python
connection_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#connection_limit LbListenerV2#connection_limit}.

---

##### `default_pool_id`<sup>Optional</sup> <a name="default_pool_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultPoolId"></a>

```python
default_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}.

---

##### `default_tls_container_ref`<sup>Optional</sup> <a name="default_tls_container_ref" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultTlsContainerRef"></a>

```python
default_tls_container_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#description LbListenerV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#id LbListenerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insert_headers`<sup>Optional</sup> <a name="insert_headers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.insertHeaders"></a>

```python
insert_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#insert_headers LbListenerV2#insert_headers}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#name LbListenerV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#region LbListenerV2#region}.

---

##### `sni_container_refs`<sup>Optional</sup> <a name="sni_container_refs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.sniContainerRefs"></a>

```python
sni_container_refs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tags LbListenerV2#tags}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}.

---

##### `timeout_client_data`<sup>Optional</sup> <a name="timeout_client_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutClientData"></a>

```python
timeout_client_data: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_client_data LbListenerV2#timeout_client_data}.

---

##### `timeout_member_connect`<sup>Optional</sup> <a name="timeout_member_connect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberConnect"></a>

```python
timeout_member_connect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_connect LbListenerV2#timeout_member_connect}.

---

##### `timeout_member_data`<sup>Optional</sup> <a name="timeout_member_data" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberData"></a>

```python
timeout_member_data: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_data LbListenerV2#timeout_member_data}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeouts"></a>

```python
timeouts: LbListenerV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeouts LbListenerV2#timeouts}

---

##### `timeout_tcp_inspect`<sup>Optional</sup> <a name="timeout_tcp_inspect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutTcpInspect"></a>

```python
timeout_tcp_inspect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_tcp_inspect LbListenerV2#timeout_tcp_inspect}.

---

### LbListenerV2Timeouts <a name="LbListenerV2Timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#create LbListenerV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#delete LbListenerV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#update LbListenerV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#create LbListenerV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#delete LbListenerV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#update LbListenerV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV2TimeoutsOutputReference <a name="LbListenerV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import lb_listener_v2

lbListenerV2.LbListenerV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbListenerV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>]

---



