# `provider` Submodule <a name="`provider` Submodule" id="@ithings/cdktf-provider-openstack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenstackProvider <a name="OpenstackProvider" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs openstack}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import provider

provider.OpenstackProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  allow_reauth: typing.Union[bool, IResolvable] = None,
  application_credential_id: str = None,
  application_credential_name: str = None,
  application_credential_secret: str = None,
  auth_url: str = None,
  cacert_file: str = None,
  cert: str = None,
  cloud: str = None,
  default_domain: str = None,
  delayed_auth: typing.Union[bool, IResolvable] = None,
  disable_no_cache_header: typing.Union[bool, IResolvable] = None,
  domain_id: str = None,
  domain_name: str = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  endpoint_overrides: typing.Mapping[str] = None,
  endpoint_type: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  key: str = None,
  max_retries: typing.Union[int, float] = None,
  password: str = None,
  project_domain_id: str = None,
  project_domain_name: str = None,
  region: str = None,
  swauth: typing.Union[bool, IResolvable] = None,
  system_scope: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None,
  tenant_name: str = None,
  token: str = None,
  use_octavia: typing.Union[bool, IResolvable] = None,
  user_domain_id: str = None,
  user_domain_name: str = None,
  user_id: str = None,
  user_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.allowReauth">allow_reauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `false`, OpenStack authorization won't be perfomed automatically, if the initial auth token get expired. Defaults to `true`. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.applicationCredentialId">application_credential_id</a></code> | <code>str</code> | Application Credential ID to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.applicationCredentialName">application_credential_name</a></code> | <code>str</code> | Application Credential name to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.applicationCredentialSecret">application_credential_secret</a></code> | <code>str</code> | Application Credential secret to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.authUrl">auth_url</a></code> | <code>str</code> | The Identity authentication URL. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.cacertFile">cacert_file</a></code> | <code>str</code> | A Custom CA certificate. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.cert">cert</a></code> | <code>str</code> | A client certificate to authenticate with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.cloud">cloud</a></code> | <code>str</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.defaultDomain">default_domain</a></code> | <code>str</code> | The name of the Domain ID to scope to if no other domain is specified. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.delayedAuth">delayed_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `false`, OpenStack authorization will be perfomed, every time the service provider client is called. Defaults to `true`. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.disableNoCacheHeader">disable_no_cache_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the HTTP `Cache-Control: no-cache` header will not be added by default to all API requests. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Outputs very verbose logs with all calls made to and responses from OpenStack. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.endpointOverrides">endpoint_overrides</a></code> | <code>typing.Mapping[str]</code> | A map of services with an endpoint to override what was from the Keystone catalog. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_type OpenstackProvider#endpoint_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trust self-signed certificates. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.key">key</a></code> | <code>str</code> | A client private key to authenticate with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | Password to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.projectDomainId">project_domain_id</a></code> | <code>str</code> | The ID of the domain where the proejct resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.projectDomainName">project_domain_name</a></code> | <code>str</code> | The name of the domain where the project resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | The OpenStack region to connect to. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.swauth">swauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.systemScope">system_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, system scoped authorization will be enabled. Defaults to `false` (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.tenantName">tenant_name</a></code> | <code>str</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.useOctavia">use_octavia</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, API requests will go the Load Balancer service (Octavia) instead of the Networking service (Neutron). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userDomainId">user_domain_id</a></code> | <code>str</code> | The ID of the domain where the user resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userDomainName">user_domain_name</a></code> | <code>str</code> | The name of the domain where the user resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | User ID to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Username to login with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#alias OpenstackProvider#alias}

---

##### `allow_reauth`<sup>Optional</sup> <a name="allow_reauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.allowReauth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `false`, OpenStack authorization won't be perfomed automatically, if the initial auth token get expired. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#allow_reauth OpenstackProvider#allow_reauth}

---

##### `application_credential_id`<sup>Optional</sup> <a name="application_credential_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.applicationCredentialId"></a>

- *Type:* str

Application Credential ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_id OpenstackProvider#application_credential_id}

---

##### `application_credential_name`<sup>Optional</sup> <a name="application_credential_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.applicationCredentialName"></a>

- *Type:* str

Application Credential name to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_name OpenstackProvider#application_credential_name}

---

##### `application_credential_secret`<sup>Optional</sup> <a name="application_credential_secret" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.applicationCredentialSecret"></a>

- *Type:* str

Application Credential secret to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_secret OpenstackProvider#application_credential_secret}

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.authUrl"></a>

- *Type:* str

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#auth_url OpenstackProvider#auth_url}

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.cacertFile"></a>

- *Type:* str

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cacert_file OpenstackProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.cert"></a>

- *Type:* str

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cert OpenstackProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.cloud"></a>

- *Type:* str

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cloud OpenstackProvider#cloud}

---

##### `default_domain`<sup>Optional</sup> <a name="default_domain" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.defaultDomain"></a>

- *Type:* str

The name of the Domain ID to scope to if no other domain is specified.

Defaults to `default` (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#default_domain OpenstackProvider#default_domain}

---

##### `delayed_auth`<sup>Optional</sup> <a name="delayed_auth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.delayedAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `false`, OpenStack authorization will be perfomed, every time the service provider client is called. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#delayed_auth OpenstackProvider#delayed_auth}

---

##### `disable_no_cache_header`<sup>Optional</sup> <a name="disable_no_cache_header" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.disableNoCacheHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the HTTP `Cache-Control: no-cache` header will not be added by default to all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#disable_no_cache_header OpenstackProvider#disable_no_cache_header}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.domainId"></a>

- *Type:* str

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#domain_id OpenstackProvider#domain_id}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.domainName"></a>

- *Type:* str

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#domain_name OpenstackProvider#domain_name}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Outputs very verbose logs with all calls made to and responses from OpenStack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#enable_logging OpenstackProvider#enable_logging}

---

##### `endpoint_overrides`<sup>Optional</sup> <a name="endpoint_overrides" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.endpointOverrides"></a>

- *Type:* typing.Mapping[str]

A map of services with an endpoint to override what was from the Keystone catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_overrides OpenstackProvider#endpoint_overrides}

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_type OpenstackProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#insecure OpenstackProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.key"></a>

- *Type:* str

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#key OpenstackProvider#key}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#max_retries OpenstackProvider#max_retries}

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.password"></a>

- *Type:* str

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#password OpenstackProvider#password}

---

##### `project_domain_id`<sup>Optional</sup> <a name="project_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.projectDomainId"></a>

- *Type:* str

The ID of the domain where the proejct resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#project_domain_id OpenstackProvider#project_domain_id}

---

##### `project_domain_name`<sup>Optional</sup> <a name="project_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.projectDomainName"></a>

- *Type:* str

The name of the domain where the project resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#project_domain_name OpenstackProvider#project_domain_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.region"></a>

- *Type:* str

The OpenStack region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#region OpenstackProvider#region}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.swauth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#swauth OpenstackProvider#swauth}

---

##### `system_scope`<sup>Optional</sup> <a name="system_scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.systemScope"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, system scoped authorization will be enabled. Defaults to `false` (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#system_scope OpenstackProvider#system_scope}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.tenantId"></a>

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#tenant_id OpenstackProvider#tenant_id}

---

##### `tenant_name`<sup>Optional</sup> <a name="tenant_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.tenantName"></a>

- *Type:* str

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#tenant_name OpenstackProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.token"></a>

- *Type:* str

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#token OpenstackProvider#token}

---

##### `use_octavia`<sup>Optional</sup> <a name="use_octavia" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.useOctavia"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, API requests will go the Load Balancer service (Octavia) instead of the Networking service (Neutron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#use_octavia OpenstackProvider#use_octavia}

---

##### `user_domain_id`<sup>Optional</sup> <a name="user_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userDomainId"></a>

- *Type:* str

The ID of the domain where the user resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_domain_id OpenstackProvider#user_domain_id}

---

##### `user_domain_name`<sup>Optional</sup> <a name="user_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userDomainName"></a>

- *Type:* str

The name of the domain where the user resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_domain_name OpenstackProvider#user_domain_name}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userId"></a>

- *Type:* str

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_id OpenstackProvider#user_id}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.userName"></a>

- *Type:* str

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_name OpenstackProvider#user_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAllowReauth">reset_allow_reauth</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialId">reset_application_credential_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialName">reset_application_credential_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialSecret">reset_application_credential_secret</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAuthUrl">reset_auth_url</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCacertFile">reset_cacert_file</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCert">reset_cert</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCloud">reset_cloud</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDefaultDomain">reset_default_domain</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDelayedAuth">reset_delayed_auth</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDisableNoCacheHeader">reset_disable_no_cache_header</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainId">reset_domain_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointOverrides">reset_endpoint_overrides</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainId">reset_project_domain_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainName">reset_project_domain_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSwauth">reset_swauth</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSystemScope">reset_system_scope</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantName">reset_tenant_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUseOctavia">reset_use_octavia</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainId">reset_user_domain_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainName">reset_user_domain_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_allow_reauth` <a name="reset_allow_reauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAllowReauth"></a>

```python
def reset_allow_reauth() -> None
```

##### `reset_application_credential_id` <a name="reset_application_credential_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialId"></a>

```python
def reset_application_credential_id() -> None
```

##### `reset_application_credential_name` <a name="reset_application_credential_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialName"></a>

```python
def reset_application_credential_name() -> None
```

##### `reset_application_credential_secret` <a name="reset_application_credential_secret" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialSecret"></a>

```python
def reset_application_credential_secret() -> None
```

##### `reset_auth_url` <a name="reset_auth_url" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAuthUrl"></a>

```python
def reset_auth_url() -> None
```

##### `reset_cacert_file` <a name="reset_cacert_file" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCacertFile"></a>

```python
def reset_cacert_file() -> None
```

##### `reset_cert` <a name="reset_cert" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCert"></a>

```python
def reset_cert() -> None
```

##### `reset_cloud` <a name="reset_cloud" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCloud"></a>

```python
def reset_cloud() -> None
```

##### `reset_default_domain` <a name="reset_default_domain" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDefaultDomain"></a>

```python
def reset_default_domain() -> None
```

##### `reset_delayed_auth` <a name="reset_delayed_auth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDelayedAuth"></a>

```python
def reset_delayed_auth() -> None
```

##### `reset_disable_no_cache_header` <a name="reset_disable_no_cache_header" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDisableNoCacheHeader"></a>

```python
def reset_disable_no_cache_header() -> None
```

##### `reset_domain_id` <a name="reset_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainId"></a>

```python
def reset_domain_id() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_endpoint_overrides` <a name="reset_endpoint_overrides" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointOverrides"></a>

```python
def reset_endpoint_overrides() -> None
```

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_key` <a name="reset_key" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_password` <a name="reset_password" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_project_domain_id` <a name="reset_project_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainId"></a>

```python
def reset_project_domain_id() -> None
```

##### `reset_project_domain_name` <a name="reset_project_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainName"></a>

```python
def reset_project_domain_name() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_swauth` <a name="reset_swauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSwauth"></a>

```python
def reset_swauth() -> None
```

##### `reset_system_scope` <a name="reset_system_scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSystemScope"></a>

```python
def reset_system_scope() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_tenant_name` <a name="reset_tenant_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantName"></a>

```python
def reset_tenant_name() -> None
```

##### `reset_token` <a name="reset_token" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_use_octavia` <a name="reset_use_octavia" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUseOctavia"></a>

```python
def reset_use_octavia() -> None
```

##### `reset_user_domain_id` <a name="reset_user_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainId"></a>

```python
def reset_user_domain_id() -> None
```

##### `reset_user_domain_name` <a name="reset_user_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainName"></a>

```python
def reset_user_domain_name() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserName"></a>

```python
def reset_user_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpenstackProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import provider

provider.OpenstackProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import provider

provider.OpenstackProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformProvider"></a>

```python
from thpham_cdktf_provider_openstack import provider

provider.OpenstackProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import provider

provider.OpenstackProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpenstackProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpenstackProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpenstackProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpenstackProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauthInput">allow_reauth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialIdInput">application_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialNameInput">application_credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecretInput">application_credential_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrlInput">auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFileInput">cacert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloudInput">cloud_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomainInput">default_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuthInput">delayed_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeaderInput">disable_no_cache_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverridesInput">endpoint_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainIdInput">project_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainNameInput">project_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauthInput">swauth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScopeInput">system_scope_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantNameInput">tenant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctaviaInput">use_octavia_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainIdInput">user_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainNameInput">user_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauth">allow_reauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialId">application_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialName">application_credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecret">application_credential_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFile">cacert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomain">default_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuth">delayed_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeader">disable_no_cache_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverrides">endpoint_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainId">project_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainName">project_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauth">swauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScope">system_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantName">tenant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctavia">use_octavia</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainId">user_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainName">user_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `allow_reauth_input`<sup>Optional</sup> <a name="allow_reauth_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauthInput"></a>

```python
allow_reauth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application_credential_id_input`<sup>Optional</sup> <a name="application_credential_id_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialIdInput"></a>

```python
application_credential_id_input: str
```

- *Type:* str

---

##### `application_credential_name_input`<sup>Optional</sup> <a name="application_credential_name_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialNameInput"></a>

```python
application_credential_name_input: str
```

- *Type:* str

---

##### `application_credential_secret_input`<sup>Optional</sup> <a name="application_credential_secret_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecretInput"></a>

```python
application_credential_secret_input: str
```

- *Type:* str

---

##### `auth_url_input`<sup>Optional</sup> <a name="auth_url_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrlInput"></a>

```python
auth_url_input: str
```

- *Type:* str

---

##### `cacert_file_input`<sup>Optional</sup> <a name="cacert_file_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFileInput"></a>

```python
cacert_file_input: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `cloud_input`<sup>Optional</sup> <a name="cloud_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloudInput"></a>

```python
cloud_input: str
```

- *Type:* str

---

##### `default_domain_input`<sup>Optional</sup> <a name="default_domain_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomainInput"></a>

```python
default_domain_input: str
```

- *Type:* str

---

##### `delayed_auth_input`<sup>Optional</sup> <a name="delayed_auth_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuthInput"></a>

```python
delayed_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_no_cache_header_input`<sup>Optional</sup> <a name="disable_no_cache_header_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeaderInput"></a>

```python
disable_no_cache_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_overrides_input`<sup>Optional</sup> <a name="endpoint_overrides_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverridesInput"></a>

```python
endpoint_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_domain_id_input`<sup>Optional</sup> <a name="project_domain_id_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainIdInput"></a>

```python
project_domain_id_input: str
```

- *Type:* str

---

##### `project_domain_name_input`<sup>Optional</sup> <a name="project_domain_name_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainNameInput"></a>

```python
project_domain_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `swauth_input`<sup>Optional</sup> <a name="swauth_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauthInput"></a>

```python
swauth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `system_scope_input`<sup>Optional</sup> <a name="system_scope_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScopeInput"></a>

```python
system_scope_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `tenant_name_input`<sup>Optional</sup> <a name="tenant_name_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantNameInput"></a>

```python
tenant_name_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `use_octavia_input`<sup>Optional</sup> <a name="use_octavia_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctaviaInput"></a>

```python
use_octavia_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_domain_id_input`<sup>Optional</sup> <a name="user_domain_id_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainIdInput"></a>

```python
user_domain_id_input: str
```

- *Type:* str

---

##### `user_domain_name_input`<sup>Optional</sup> <a name="user_domain_name_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainNameInput"></a>

```python
user_domain_name_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `allow_reauth`<sup>Optional</sup> <a name="allow_reauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauth"></a>

```python
allow_reauth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application_credential_id`<sup>Optional</sup> <a name="application_credential_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialId"></a>

```python
application_credential_id: str
```

- *Type:* str

---

##### `application_credential_name`<sup>Optional</sup> <a name="application_credential_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialName"></a>

```python
application_credential_name: str
```

- *Type:* str

---

##### `application_credential_secret`<sup>Optional</sup> <a name="application_credential_secret" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecret"></a>

```python
application_credential_secret: str
```

- *Type:* str

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `default_domain`<sup>Optional</sup> <a name="default_domain" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomain"></a>

```python
default_domain: str
```

- *Type:* str

---

##### `delayed_auth`<sup>Optional</sup> <a name="delayed_auth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuth"></a>

```python
delayed_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_no_cache_header`<sup>Optional</sup> <a name="disable_no_cache_header" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeader"></a>

```python
disable_no_cache_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_overrides`<sup>Optional</sup> <a name="endpoint_overrides" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverrides"></a>

```python
endpoint_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Optional</sup> <a name="key" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project_domain_id`<sup>Optional</sup> <a name="project_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainId"></a>

```python
project_domain_id: str
```

- *Type:* str

---

##### `project_domain_name`<sup>Optional</sup> <a name="project_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainName"></a>

```python
project_domain_name: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauth"></a>

```python
swauth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `system_scope`<sup>Optional</sup> <a name="system_scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScope"></a>

```python
system_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `tenant_name`<sup>Optional</sup> <a name="tenant_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `use_octavia`<sup>Optional</sup> <a name="use_octavia" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctavia"></a>

```python
use_octavia: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_domain_id`<sup>Optional</sup> <a name="user_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainId"></a>

```python
user_domain_id: str
```

- *Type:* str

---

##### `user_domain_name`<sup>Optional</sup> <a name="user_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainName"></a>

```python
user_domain_name: str
```

- *Type:* str

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpenstackProviderConfig <a name="OpenstackProviderConfig" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import provider

provider.OpenstackProviderConfig(
  alias: str = None,
  allow_reauth: typing.Union[bool, IResolvable] = None,
  application_credential_id: str = None,
  application_credential_name: str = None,
  application_credential_secret: str = None,
  auth_url: str = None,
  cacert_file: str = None,
  cert: str = None,
  cloud: str = None,
  default_domain: str = None,
  delayed_auth: typing.Union[bool, IResolvable] = None,
  disable_no_cache_header: typing.Union[bool, IResolvable] = None,
  domain_id: str = None,
  domain_name: str = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  endpoint_overrides: typing.Mapping[str] = None,
  endpoint_type: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  key: str = None,
  max_retries: typing.Union[int, float] = None,
  password: str = None,
  project_domain_id: str = None,
  project_domain_name: str = None,
  region: str = None,
  swauth: typing.Union[bool, IResolvable] = None,
  system_scope: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None,
  tenant_name: str = None,
  token: str = None,
  use_octavia: typing.Union[bool, IResolvable] = None,
  user_domain_id: str = None,
  user_domain_name: str = None,
  user_id: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.allowReauth">allow_reauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `false`, OpenStack authorization won't be perfomed automatically, if the initial auth token get expired. Defaults to `true`. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialId">application_credential_id</a></code> | <code>str</code> | Application Credential ID to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialName">application_credential_name</a></code> | <code>str</code> | Application Credential name to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialSecret">application_credential_secret</a></code> | <code>str</code> | Application Credential secret to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.authUrl">auth_url</a></code> | <code>str</code> | The Identity authentication URL. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cacertFile">cacert_file</a></code> | <code>str</code> | A Custom CA certificate. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cert">cert</a></code> | <code>str</code> | A client certificate to authenticate with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cloud">cloud</a></code> | <code>str</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.defaultDomain">default_domain</a></code> | <code>str</code> | The name of the Domain ID to scope to if no other domain is specified. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.delayedAuth">delayed_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `false`, OpenStack authorization will be perfomed, every time the service provider client is called. Defaults to `true`. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.disableNoCacheHeader">disable_no_cache_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the HTTP `Cache-Control: no-cache` header will not be added by default to all API requests. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainId">domain_id</a></code> | <code>str</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainName">domain_name</a></code> | <code>str</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Outputs very verbose logs with all calls made to and responses from OpenStack. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointOverrides">endpoint_overrides</a></code> | <code>typing.Mapping[str]</code> | A map of services with an endpoint to override what was from the Keystone catalog. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_type OpenstackProvider#endpoint_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trust self-signed certificates. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.key">key</a></code> | <code>str</code> | A client private key to authenticate with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.password">password</a></code> | <code>str</code> | Password to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainId">project_domain_id</a></code> | <code>str</code> | The ID of the domain where the proejct resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainName">project_domain_name</a></code> | <code>str</code> | The name of the domain where the project resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.region">region</a></code> | <code>str</code> | The OpenStack region to connect to. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.swauth">swauth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.systemScope">system_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, system scoped authorization will be enabled. Defaults to `false` (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantName">tenant_name</a></code> | <code>str</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.token">token</a></code> | <code>str</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.useOctavia">use_octavia</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, API requests will go the Load Balancer service (Octavia) instead of the Networking service (Neutron). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainId">user_domain_id</a></code> | <code>str</code> | The ID of the domain where the user resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainName">user_domain_name</a></code> | <code>str</code> | The name of the domain where the user resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userId">user_id</a></code> | <code>str</code> | User ID to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userName">user_name</a></code> | <code>str</code> | Username to login with. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#alias OpenstackProvider#alias}

---

##### `allow_reauth`<sup>Optional</sup> <a name="allow_reauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.allowReauth"></a>

```python
allow_reauth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `false`, OpenStack authorization won't be perfomed automatically, if the initial auth token get expired. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#allow_reauth OpenstackProvider#allow_reauth}

---

##### `application_credential_id`<sup>Optional</sup> <a name="application_credential_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialId"></a>

```python
application_credential_id: str
```

- *Type:* str

Application Credential ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_id OpenstackProvider#application_credential_id}

---

##### `application_credential_name`<sup>Optional</sup> <a name="application_credential_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialName"></a>

```python
application_credential_name: str
```

- *Type:* str

Application Credential name to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_name OpenstackProvider#application_credential_name}

---

##### `application_credential_secret`<sup>Optional</sup> <a name="application_credential_secret" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialSecret"></a>

```python
application_credential_secret: str
```

- *Type:* str

Application Credential secret to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_secret OpenstackProvider#application_credential_secret}

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#auth_url OpenstackProvider#auth_url}

---

##### `cacert_file`<sup>Optional</sup> <a name="cacert_file" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cacertFile"></a>

```python
cacert_file: str
```

- *Type:* str

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cacert_file OpenstackProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cert"></a>

```python
cert: str
```

- *Type:* str

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cert OpenstackProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cloud OpenstackProvider#cloud}

---

##### `default_domain`<sup>Optional</sup> <a name="default_domain" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.defaultDomain"></a>

```python
default_domain: str
```

- *Type:* str

The name of the Domain ID to scope to if no other domain is specified.

Defaults to `default` (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#default_domain OpenstackProvider#default_domain}

---

##### `delayed_auth`<sup>Optional</sup> <a name="delayed_auth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.delayedAuth"></a>

```python
delayed_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `false`, OpenStack authorization will be perfomed, every time the service provider client is called. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#delayed_auth OpenstackProvider#delayed_auth}

---

##### `disable_no_cache_header`<sup>Optional</sup> <a name="disable_no_cache_header" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.disableNoCacheHeader"></a>

```python
disable_no_cache_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the HTTP `Cache-Control: no-cache` header will not be added by default to all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#disable_no_cache_header OpenstackProvider#disable_no_cache_header}

---

##### `domain_id`<sup>Optional</sup> <a name="domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#domain_id OpenstackProvider#domain_id}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#domain_name OpenstackProvider#domain_name}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Outputs very verbose logs with all calls made to and responses from OpenStack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#enable_logging OpenstackProvider#enable_logging}

---

##### `endpoint_overrides`<sup>Optional</sup> <a name="endpoint_overrides" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointOverrides"></a>

```python
endpoint_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of services with an endpoint to override what was from the Keystone catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_overrides OpenstackProvider#endpoint_overrides}

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_type OpenstackProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#insecure OpenstackProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#key OpenstackProvider#key}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#max_retries OpenstackProvider#max_retries}

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#password OpenstackProvider#password}

---

##### `project_domain_id`<sup>Optional</sup> <a name="project_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainId"></a>

```python
project_domain_id: str
```

- *Type:* str

The ID of the domain where the proejct resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#project_domain_id OpenstackProvider#project_domain_id}

---

##### `project_domain_name`<sup>Optional</sup> <a name="project_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainName"></a>

```python
project_domain_name: str
```

- *Type:* str

The name of the domain where the project resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#project_domain_name OpenstackProvider#project_domain_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The OpenStack region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#region OpenstackProvider#region}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.swauth"></a>

```python
swauth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#swauth OpenstackProvider#swauth}

---

##### `system_scope`<sup>Optional</sup> <a name="system_scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.systemScope"></a>

```python
system_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, system scoped authorization will be enabled. Defaults to `false` (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#system_scope OpenstackProvider#system_scope}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#tenant_id OpenstackProvider#tenant_id}

---

##### `tenant_name`<sup>Optional</sup> <a name="tenant_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#tenant_name OpenstackProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#token OpenstackProvider#token}

---

##### `use_octavia`<sup>Optional</sup> <a name="use_octavia" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.useOctavia"></a>

```python
use_octavia: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, API requests will go the Load Balancer service (Octavia) instead of the Networking service (Neutron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#use_octavia OpenstackProvider#use_octavia}

---

##### `user_domain_id`<sup>Optional</sup> <a name="user_domain_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainId"></a>

```python
user_domain_id: str
```

- *Type:* str

The ID of the domain where the user resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_domain_id OpenstackProvider#user_domain_id}

---

##### `user_domain_name`<sup>Optional</sup> <a name="user_domain_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainName"></a>

```python
user_domain_name: str
```

- *Type:* str

The name of the domain where the user resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_domain_name OpenstackProvider#user_domain_name}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_id OpenstackProvider#user_id}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_name OpenstackProvider#user_name}

---



