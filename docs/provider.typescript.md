# `provider` Submodule <a name="`provider` Submodule" id="@ithings/cdktf-provider-openstack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenstackProvider <a name="OpenstackProvider" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs openstack}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer"></a>

```typescript
import { provider } from '@ithings/cdktf-provider-openstack'

new provider.OpenstackProvider(scope: Construct, id: string, config?: OpenstackProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig">OpenstackProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig">OpenstackProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAllowReauth">resetAllowReauth</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialId">resetApplicationCredentialId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialName">resetApplicationCredentialName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialSecret">resetApplicationCredentialSecret</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCacertFile">resetCacertFile</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCert">resetCert</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDefaultDomain">resetDefaultDomain</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDelayedAuth">resetDelayedAuth</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDisableNoCacheHeader">resetDisableNoCacheHeader</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointOverrides">resetEndpointOverrides</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainId">resetProjectDomainId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainName">resetProjectDomainName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSwauth">resetSwauth</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSystemScope">resetSystemScope</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantName">resetTenantName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUseOctavia">resetUseOctavia</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainId">resetUserDomainId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainName">resetUserDomainName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAllowReauth` <a name="resetAllowReauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAllowReauth"></a>

```typescript
public resetAllowReauth(): void
```

##### `resetApplicationCredentialId` <a name="resetApplicationCredentialId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialId"></a>

```typescript
public resetApplicationCredentialId(): void
```

##### `resetApplicationCredentialName` <a name="resetApplicationCredentialName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialName"></a>

```typescript
public resetApplicationCredentialName(): void
```

##### `resetApplicationCredentialSecret` <a name="resetApplicationCredentialSecret" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetApplicationCredentialSecret"></a>

```typescript
public resetApplicationCredentialSecret(): void
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetAuthUrl"></a>

```typescript
public resetAuthUrl(): void
```

##### `resetCacertFile` <a name="resetCacertFile" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCacertFile"></a>

```typescript
public resetCacertFile(): void
```

##### `resetCert` <a name="resetCert" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCert"></a>

```typescript
public resetCert(): void
```

##### `resetCloud` <a name="resetCloud" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetCloud"></a>

```typescript
public resetCloud(): void
```

##### `resetDefaultDomain` <a name="resetDefaultDomain" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDefaultDomain"></a>

```typescript
public resetDefaultDomain(): void
```

##### `resetDelayedAuth` <a name="resetDelayedAuth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDelayedAuth"></a>

```typescript
public resetDelayedAuth(): void
```

##### `resetDisableNoCacheHeader` <a name="resetDisableNoCacheHeader" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDisableNoCacheHeader"></a>

```typescript
public resetDisableNoCacheHeader(): void
```

##### `resetDomainId` <a name="resetDomainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetEndpointOverrides` <a name="resetEndpointOverrides" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointOverrides"></a>

```typescript
public resetEndpointOverrides(): void
```

##### `resetEndpointType` <a name="resetEndpointType" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetKey` <a name="resetKey" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetPassword` <a name="resetPassword" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetProjectDomainId` <a name="resetProjectDomainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainId"></a>

```typescript
public resetProjectDomainId(): void
```

##### `resetProjectDomainName` <a name="resetProjectDomainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetProjectDomainName"></a>

```typescript
public resetProjectDomainName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSwauth` <a name="resetSwauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSwauth"></a>

```typescript
public resetSwauth(): void
```

##### `resetSystemScope` <a name="resetSystemScope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetSystemScope"></a>

```typescript
public resetSystemScope(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTenantName` <a name="resetTenantName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetTenantName"></a>

```typescript
public resetTenantName(): void
```

##### `resetToken` <a name="resetToken" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUseOctavia` <a name="resetUseOctavia" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUseOctavia"></a>

```typescript
public resetUseOctavia(): void
```

##### `resetUserDomainId` <a name="resetUserDomainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainId"></a>

```typescript
public resetUserDomainId(): void
```

##### `resetUserDomainName` <a name="resetUserDomainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserDomainName"></a>

```typescript
public resetUserDomainName(): void
```

##### `resetUserId` <a name="resetUserId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserId"></a>

```typescript
public resetUserId(): void
```

##### `resetUserName` <a name="resetUserName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.resetUserName"></a>

```typescript
public resetUserName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpenstackProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isConstruct"></a>

```typescript
import { provider } from '@ithings/cdktf-provider-openstack'

provider.OpenstackProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformElement"></a>

```typescript
import { provider } from '@ithings/cdktf-provider-openstack'

provider.OpenstackProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@ithings/cdktf-provider-openstack'

provider.OpenstackProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@ithings/cdktf-provider-openstack'

provider.OpenstackProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpenstackProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpenstackProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauthInput">allowReauthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialIdInput">applicationCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialNameInput">applicationCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecretInput">applicationCredentialSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrlInput">authUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFileInput">cacertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloudInput">cloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomainInput">defaultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuthInput">delayedAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeaderInput">disableNoCacheHeaderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverridesInput">endpointOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainIdInput">projectDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainNameInput">projectDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauthInput">swauthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScopeInput">systemScopeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantNameInput">tenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctaviaInput">useOctaviaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainIdInput">userDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainNameInput">userDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauth">allowReauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialId">applicationCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialName">applicationCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecret">applicationCredentialSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFile">cacertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomain">defaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuth">delayedAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeader">disableNoCacheHeader</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverrides">endpointOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainId">projectDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainName">projectDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauth">swauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScope">systemScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantName">tenantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctavia">useOctavia</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainId">userDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainName">userDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `allowReauthInput`<sup>Optional</sup> <a name="allowReauthInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauthInput"></a>

```typescript
public readonly allowReauthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applicationCredentialIdInput`<sup>Optional</sup> <a name="applicationCredentialIdInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialIdInput"></a>

```typescript
public readonly applicationCredentialIdInput: string;
```

- *Type:* string

---

##### `applicationCredentialNameInput`<sup>Optional</sup> <a name="applicationCredentialNameInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialNameInput"></a>

```typescript
public readonly applicationCredentialNameInput: string;
```

- *Type:* string

---

##### `applicationCredentialSecretInput`<sup>Optional</sup> <a name="applicationCredentialSecretInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecretInput"></a>

```typescript
public readonly applicationCredentialSecretInput: string;
```

- *Type:* string

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrlInput"></a>

```typescript
public readonly authUrlInput: string;
```

- *Type:* string

---

##### `cacertFileInput`<sup>Optional</sup> <a name="cacertFileInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFileInput"></a>

```typescript
public readonly cacertFileInput: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloudInput"></a>

```typescript
public readonly cloudInput: string;
```

- *Type:* string

---

##### `defaultDomainInput`<sup>Optional</sup> <a name="defaultDomainInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomainInput"></a>

```typescript
public readonly defaultDomainInput: string;
```

- *Type:* string

---

##### `delayedAuthInput`<sup>Optional</sup> <a name="delayedAuthInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuthInput"></a>

```typescript
public readonly delayedAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableNoCacheHeaderInput`<sup>Optional</sup> <a name="disableNoCacheHeaderInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeaderInput"></a>

```typescript
public readonly disableNoCacheHeaderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointOverridesInput`<sup>Optional</sup> <a name="endpointOverridesInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverridesInput"></a>

```typescript
public readonly endpointOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `projectDomainIdInput`<sup>Optional</sup> <a name="projectDomainIdInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainIdInput"></a>

```typescript
public readonly projectDomainIdInput: string;
```

- *Type:* string

---

##### `projectDomainNameInput`<sup>Optional</sup> <a name="projectDomainNameInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainNameInput"></a>

```typescript
public readonly projectDomainNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `swauthInput`<sup>Optional</sup> <a name="swauthInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauthInput"></a>

```typescript
public readonly swauthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `systemScopeInput`<sup>Optional</sup> <a name="systemScopeInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScopeInput"></a>

```typescript
public readonly systemScopeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantNameInput"></a>

```typescript
public readonly tenantNameInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `useOctaviaInput`<sup>Optional</sup> <a name="useOctaviaInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctaviaInput"></a>

```typescript
public readonly useOctaviaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDomainIdInput`<sup>Optional</sup> <a name="userDomainIdInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainIdInput"></a>

```typescript
public readonly userDomainIdInput: string;
```

- *Type:* string

---

##### `userDomainNameInput`<sup>Optional</sup> <a name="userDomainNameInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainNameInput"></a>

```typescript
public readonly userDomainNameInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `allowReauth`<sup>Optional</sup> <a name="allowReauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.allowReauth"></a>

```typescript
public readonly allowReauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applicationCredentialId`<sup>Optional</sup> <a name="applicationCredentialId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialId"></a>

```typescript
public readonly applicationCredentialId: string;
```

- *Type:* string

---

##### `applicationCredentialName`<sup>Optional</sup> <a name="applicationCredentialName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialName"></a>

```typescript
public readonly applicationCredentialName: string;
```

- *Type:* string

---

##### `applicationCredentialSecret`<sup>Optional</sup> <a name="applicationCredentialSecret" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.applicationCredentialSecret"></a>

```typescript
public readonly applicationCredentialSecret: string;
```

- *Type:* string

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `defaultDomain`<sup>Optional</sup> <a name="defaultDomain" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.defaultDomain"></a>

```typescript
public readonly defaultDomain: string;
```

- *Type:* string

---

##### `delayedAuth`<sup>Optional</sup> <a name="delayedAuth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.delayedAuth"></a>

```typescript
public readonly delayedAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableNoCacheHeader`<sup>Optional</sup> <a name="disableNoCacheHeader" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.disableNoCacheHeader"></a>

```typescript
public readonly disableNoCacheHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointOverrides`<sup>Optional</sup> <a name="endpointOverrides" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointOverrides"></a>

```typescript
public readonly endpointOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Optional</sup> <a name="key" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `projectDomainId`<sup>Optional</sup> <a name="projectDomainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainId"></a>

```typescript
public readonly projectDomainId: string;
```

- *Type:* string

---

##### `projectDomainName`<sup>Optional</sup> <a name="projectDomainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.projectDomainName"></a>

```typescript
public readonly projectDomainName: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.swauth"></a>

```typescript
public readonly swauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `systemScope`<sup>Optional</sup> <a name="systemScope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.systemScope"></a>

```typescript
public readonly systemScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `tenantName`<sup>Optional</sup> <a name="tenantName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `useOctavia`<sup>Optional</sup> <a name="useOctavia" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.useOctavia"></a>

```typescript
public readonly useOctavia: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDomainId`<sup>Optional</sup> <a name="userDomainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainId"></a>

```typescript
public readonly userDomainId: string;
```

- *Type:* string

---

##### `userDomainName`<sup>Optional</sup> <a name="userDomainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userDomainName"></a>

```typescript
public readonly userDomainName: string;
```

- *Type:* string

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.provider.OpenstackProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenstackProviderConfig <a name="OpenstackProviderConfig" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.Initializer"></a>

```typescript
import { provider } from '@ithings/cdktf-provider-openstack'

const openstackProviderConfig: provider.OpenstackProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.allowReauth">allowReauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `false`, OpenStack authorization won't be perfomed automatically, if the initial auth token get expired. Defaults to `true`. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialId">applicationCredentialId</a></code> | <code>string</code> | Application Credential ID to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialName">applicationCredentialName</a></code> | <code>string</code> | Application Credential name to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialSecret">applicationCredentialSecret</a></code> | <code>string</code> | Application Credential secret to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.authUrl">authUrl</a></code> | <code>string</code> | The Identity authentication URL. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cacertFile">cacertFile</a></code> | <code>string</code> | A Custom CA certificate. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cert">cert</a></code> | <code>string</code> | A client certificate to authenticate with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cloud">cloud</a></code> | <code>string</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.defaultDomain">defaultDomain</a></code> | <code>string</code> | The name of the Domain ID to scope to if no other domain is specified. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.delayedAuth">delayedAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `false`, OpenStack authorization will be perfomed, every time the service provider client is called. Defaults to `true`. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.disableNoCacheHeader">disableNoCacheHeader</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the HTTP `Cache-Control: no-cache` header will not be added by default to all API requests. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainId">domainId</a></code> | <code>string</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainName">domainName</a></code> | <code>string</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Outputs very verbose logs with all calls made to and responses from OpenStack. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointOverrides">endpointOverrides</a></code> | <code>{[ key: string ]: string}</code> | A map of services with an endpoint to override what was from the Keystone catalog. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_type OpenstackProvider#endpoint_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Trust self-signed certificates. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.key">key</a></code> | <code>string</code> | A client private key to authenticate with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.password">password</a></code> | <code>string</code> | Password to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainId">projectDomainId</a></code> | <code>string</code> | The ID of the domain where the proejct resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainName">projectDomainName</a></code> | <code>string</code> | The name of the domain where the project resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.region">region</a></code> | <code>string</code> | The OpenStack region to connect to. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.swauth">swauth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.systemScope">systemScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, system scoped authorization will be enabled. Defaults to `false` (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantName">tenantName</a></code> | <code>string</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.token">token</a></code> | <code>string</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.useOctavia">useOctavia</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, API requests will go the Load Balancer service (Octavia) instead of the Networking service (Neutron). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainId">userDomainId</a></code> | <code>string</code> | The ID of the domain where the user resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainName">userDomainName</a></code> | <code>string</code> | The name of the domain where the user resides (Identity v3). |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userId">userId</a></code> | <code>string</code> | User ID to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userName">userName</a></code> | <code>string</code> | Username to login with. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#alias OpenstackProvider#alias}

---

##### `allowReauth`<sup>Optional</sup> <a name="allowReauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.allowReauth"></a>

```typescript
public readonly allowReauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `false`, OpenStack authorization won't be perfomed automatically, if the initial auth token get expired. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#allow_reauth OpenstackProvider#allow_reauth}

---

##### `applicationCredentialId`<sup>Optional</sup> <a name="applicationCredentialId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialId"></a>

```typescript
public readonly applicationCredentialId: string;
```

- *Type:* string

Application Credential ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_id OpenstackProvider#application_credential_id}

---

##### `applicationCredentialName`<sup>Optional</sup> <a name="applicationCredentialName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialName"></a>

```typescript
public readonly applicationCredentialName: string;
```

- *Type:* string

Application Credential name to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_name OpenstackProvider#application_credential_name}

---

##### `applicationCredentialSecret`<sup>Optional</sup> <a name="applicationCredentialSecret" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.applicationCredentialSecret"></a>

```typescript
public readonly applicationCredentialSecret: string;
```

- *Type:* string

Application Credential secret to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#application_credential_secret OpenstackProvider#application_credential_secret}

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#auth_url OpenstackProvider#auth_url}

---

##### `cacertFile`<sup>Optional</sup> <a name="cacertFile" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cacertFile"></a>

```typescript
public readonly cacertFile: string;
```

- *Type:* string

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cacert_file OpenstackProvider#cacert_file}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cert OpenstackProvider#cert}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#cloud OpenstackProvider#cloud}

---

##### `defaultDomain`<sup>Optional</sup> <a name="defaultDomain" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.defaultDomain"></a>

```typescript
public readonly defaultDomain: string;
```

- *Type:* string

The name of the Domain ID to scope to if no other domain is specified.

Defaults to `default` (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#default_domain OpenstackProvider#default_domain}

---

##### `delayedAuth`<sup>Optional</sup> <a name="delayedAuth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.delayedAuth"></a>

```typescript
public readonly delayedAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `false`, OpenStack authorization will be perfomed, every time the service provider client is called. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#delayed_auth OpenstackProvider#delayed_auth}

---

##### `disableNoCacheHeader`<sup>Optional</sup> <a name="disableNoCacheHeader" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.disableNoCacheHeader"></a>

```typescript
public readonly disableNoCacheHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the HTTP `Cache-Control: no-cache` header will not be added by default to all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#disable_no_cache_header OpenstackProvider#disable_no_cache_header}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#domain_id OpenstackProvider#domain_id}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#domain_name OpenstackProvider#domain_name}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Outputs very verbose logs with all calls made to and responses from OpenStack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#enable_logging OpenstackProvider#enable_logging}

---

##### `endpointOverrides`<sup>Optional</sup> <a name="endpointOverrides" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointOverrides"></a>

```typescript
public readonly endpointOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of services with an endpoint to override what was from the Keystone catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_overrides OpenstackProvider#endpoint_overrides}

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#endpoint_type OpenstackProvider#endpoint_type}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#insecure OpenstackProvider#insecure}

---

##### `key`<sup>Optional</sup> <a name="key" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#key OpenstackProvider#key}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#max_retries OpenstackProvider#max_retries}

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#password OpenstackProvider#password}

---

##### `projectDomainId`<sup>Optional</sup> <a name="projectDomainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainId"></a>

```typescript
public readonly projectDomainId: string;
```

- *Type:* string

The ID of the domain where the proejct resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#project_domain_id OpenstackProvider#project_domain_id}

---

##### `projectDomainName`<sup>Optional</sup> <a name="projectDomainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.projectDomainName"></a>

```typescript
public readonly projectDomainName: string;
```

- *Type:* string

The name of the domain where the project resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#project_domain_name OpenstackProvider#project_domain_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The OpenStack region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#region OpenstackProvider#region}

---

##### `swauth`<sup>Optional</sup> <a name="swauth" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.swauth"></a>

```typescript
public readonly swauth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#swauth OpenstackProvider#swauth}

---

##### `systemScope`<sup>Optional</sup> <a name="systemScope" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.systemScope"></a>

```typescript
public readonly systemScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, system scoped authorization will be enabled. Defaults to `false` (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#system_scope OpenstackProvider#system_scope}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#tenant_id OpenstackProvider#tenant_id}

---

##### `tenantName`<sup>Optional</sup> <a name="tenantName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.tenantName"></a>

```typescript
public readonly tenantName: string;
```

- *Type:* string

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#tenant_name OpenstackProvider#tenant_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#token OpenstackProvider#token}

---

##### `useOctavia`<sup>Optional</sup> <a name="useOctavia" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.useOctavia"></a>

```typescript
public readonly useOctavia: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, API requests will go the Load Balancer service (Octavia) instead of the Networking service (Neutron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#use_octavia OpenstackProvider#use_octavia}

---

##### `userDomainId`<sup>Optional</sup> <a name="userDomainId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainId"></a>

```typescript
public readonly userDomainId: string;
```

- *Type:* string

The ID of the domain where the user resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_domain_id OpenstackProvider#user_domain_id}

---

##### `userDomainName`<sup>Optional</sup> <a name="userDomainName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userDomainName"></a>

```typescript
public readonly userDomainName: string;
```

- *Type:* string

The name of the domain where the user resides (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_domain_name OpenstackProvider#user_domain_name}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_id OpenstackProvider#user_id}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@ithings/cdktf-provider-openstack.provider.OpenstackProviderConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs#user_name OpenstackProvider#user_name}

---



