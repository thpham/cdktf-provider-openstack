# `identityUserV3` Submodule <a name="`identityUserV3` Submodule" id="@ithings/cdktf-provider-openstack.identityUserV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityUserV3 <a name="IdentityUserV3" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3 openstack_identity_user_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

new identityUserV3.IdentityUserV3(scope: Construct, id: string, config?: IdentityUserV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config">IdentityUserV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config">IdentityUserV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.putMultiFactorAuthRule">putMultiFactorAuthRule</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDefaultProjectId">resetDefaultProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetExtra">resetExtra</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreChangePasswordUponFirstUse">resetIgnoreChangePasswordUponFirstUse</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreLockoutFailureAttempts">resetIgnoreLockoutFailureAttempts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnorePasswordExpiry">resetIgnorePasswordExpiry</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthEnabled">resetMultiFactorAuthEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthRule">resetMultiFactorAuthRule</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMultiFactorAuthRule` <a name="putMultiFactorAuthRule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.putMultiFactorAuthRule"></a>

```typescript
public putMultiFactorAuthRule(value: IResolvable | IdentityUserV3MultiFactorAuthRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.putMultiFactorAuthRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>[]

---

##### `resetDefaultProjectId` <a name="resetDefaultProjectId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDefaultProjectId"></a>

```typescript
public resetDefaultProjectId(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainId` <a name="resetDomainId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExtra` <a name="resetExtra" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetExtra"></a>

```typescript
public resetExtra(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreChangePasswordUponFirstUse` <a name="resetIgnoreChangePasswordUponFirstUse" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreChangePasswordUponFirstUse"></a>

```typescript
public resetIgnoreChangePasswordUponFirstUse(): void
```

##### `resetIgnoreLockoutFailureAttempts` <a name="resetIgnoreLockoutFailureAttempts" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnoreLockoutFailureAttempts"></a>

```typescript
public resetIgnoreLockoutFailureAttempts(): void
```

##### `resetIgnorePasswordExpiry` <a name="resetIgnorePasswordExpiry" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetIgnorePasswordExpiry"></a>

```typescript
public resetIgnorePasswordExpiry(): void
```

##### `resetMultiFactorAuthEnabled` <a name="resetMultiFactorAuthEnabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthEnabled"></a>

```typescript
public resetMultiFactorAuthEnabled(): void
```

##### `resetMultiFactorAuthRule` <a name="resetMultiFactorAuthRule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetMultiFactorAuthRule"></a>

```typescript
public resetMultiFactorAuthRule(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPassword` <a name="resetPassword" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityUserV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isConstruct"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

identityUserV3.IdentityUserV3.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformElement"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

identityUserV3.IdentityUserV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformResource"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

identityUserV3.IdentityUserV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

identityUserV3.IdentityUserV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityUserV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityUserV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRule">multiFactorAuthRule</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList">IdentityUserV3MultiFactorAuthRuleList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectIdInput">defaultProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extraInput">extraInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUseInput">ignoreChangePasswordUponFirstUseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttemptsInput">ignoreLockoutFailureAttemptsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiryInput">ignorePasswordExpiryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabledInput">multiFactorAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRuleInput">multiFactorAuthRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectId">defaultProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extra">extra</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUse">ignoreChangePasswordUponFirstUse</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttempts">ignoreLockoutFailureAttempts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiry">ignorePasswordExpiry</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabled">multiFactorAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `multiFactorAuthRule`<sup>Required</sup> <a name="multiFactorAuthRule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRule"></a>

```typescript
public readonly multiFactorAuthRule: IdentityUserV3MultiFactorAuthRuleList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList">IdentityUserV3MultiFactorAuthRuleList</a>

---

##### `defaultProjectIdInput`<sup>Optional</sup> <a name="defaultProjectIdInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectIdInput"></a>

```typescript
public readonly defaultProjectIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extraInput`<sup>Optional</sup> <a name="extraInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extraInput"></a>

```typescript
public readonly extraInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreChangePasswordUponFirstUseInput`<sup>Optional</sup> <a name="ignoreChangePasswordUponFirstUseInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUseInput"></a>

```typescript
public readonly ignoreChangePasswordUponFirstUseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreLockoutFailureAttemptsInput`<sup>Optional</sup> <a name="ignoreLockoutFailureAttemptsInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttemptsInput"></a>

```typescript
public readonly ignoreLockoutFailureAttemptsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignorePasswordExpiryInput`<sup>Optional</sup> <a name="ignorePasswordExpiryInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiryInput"></a>

```typescript
public readonly ignorePasswordExpiryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiFactorAuthEnabledInput`<sup>Optional</sup> <a name="multiFactorAuthEnabledInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabledInput"></a>

```typescript
public readonly multiFactorAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiFactorAuthRuleInput`<sup>Optional</sup> <a name="multiFactorAuthRuleInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthRuleInput"></a>

```typescript
public readonly multiFactorAuthRuleInput: IResolvable | IdentityUserV3MultiFactorAuthRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `defaultProjectId`<sup>Required</sup> <a name="defaultProjectId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.defaultProjectId"></a>

```typescript
public readonly defaultProjectId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extra`<sup>Required</sup> <a name="extra" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.extra"></a>

```typescript
public readonly extra: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreChangePasswordUponFirstUse`<sup>Required</sup> <a name="ignoreChangePasswordUponFirstUse" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreChangePasswordUponFirstUse"></a>

```typescript
public readonly ignoreChangePasswordUponFirstUse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreLockoutFailureAttempts`<sup>Required</sup> <a name="ignoreLockoutFailureAttempts" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignoreLockoutFailureAttempts"></a>

```typescript
public readonly ignoreLockoutFailureAttempts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignorePasswordExpiry`<sup>Required</sup> <a name="ignorePasswordExpiry" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.ignorePasswordExpiry"></a>

```typescript
public readonly ignorePasswordExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiFactorAuthEnabled`<sup>Required</sup> <a name="multiFactorAuthEnabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.multiFactorAuthEnabled"></a>

```typescript
public readonly multiFactorAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityUserV3Config <a name="IdentityUserV3Config" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.Initializer"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

const identityUserV3Config: identityUserV3.IdentityUserV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.defaultProjectId">defaultProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#default_project_id IdentityUserV3#default_project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#description IdentityUserV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#domain_id IdentityUserV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.extra">extra</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#extra IdentityUserV3#extra}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#id IdentityUserV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreChangePasswordUponFirstUse">ignoreChangePasswordUponFirstUse</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_change_password_upon_first_use IdentityUserV3#ignore_change_password_upon_first_use}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreLockoutFailureAttempts">ignoreLockoutFailureAttempts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_lockout_failure_attempts IdentityUserV3#ignore_lockout_failure_attempts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignorePasswordExpiry">ignorePasswordExpiry</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_password_expiry IdentityUserV3#ignore_password_expiry}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthEnabled">multiFactorAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_enabled IdentityUserV3#multi_factor_auth_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthRule">multiFactorAuthRule</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>[]</code> | multi_factor_auth_rule block. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#name IdentityUserV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#password IdentityUserV3#password}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#region IdentityUserV3#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultProjectId`<sup>Optional</sup> <a name="defaultProjectId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.defaultProjectId"></a>

```typescript
public readonly defaultProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#default_project_id IdentityUserV3#default_project_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#description IdentityUserV3#description}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#domain_id IdentityUserV3#domain_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#enabled IdentityUserV3#enabled}.

---

##### `extra`<sup>Optional</sup> <a name="extra" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.extra"></a>

```typescript
public readonly extra: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#extra IdentityUserV3#extra}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#id IdentityUserV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreChangePasswordUponFirstUse`<sup>Optional</sup> <a name="ignoreChangePasswordUponFirstUse" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreChangePasswordUponFirstUse"></a>

```typescript
public readonly ignoreChangePasswordUponFirstUse: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_change_password_upon_first_use IdentityUserV3#ignore_change_password_upon_first_use}.

---

##### `ignoreLockoutFailureAttempts`<sup>Optional</sup> <a name="ignoreLockoutFailureAttempts" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignoreLockoutFailureAttempts"></a>

```typescript
public readonly ignoreLockoutFailureAttempts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_lockout_failure_attempts IdentityUserV3#ignore_lockout_failure_attempts}.

---

##### `ignorePasswordExpiry`<sup>Optional</sup> <a name="ignorePasswordExpiry" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.ignorePasswordExpiry"></a>

```typescript
public readonly ignorePasswordExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#ignore_password_expiry IdentityUserV3#ignore_password_expiry}.

---

##### `multiFactorAuthEnabled`<sup>Optional</sup> <a name="multiFactorAuthEnabled" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthEnabled"></a>

```typescript
public readonly multiFactorAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_enabled IdentityUserV3#multi_factor_auth_enabled}.

---

##### `multiFactorAuthRule`<sup>Optional</sup> <a name="multiFactorAuthRule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.multiFactorAuthRule"></a>

```typescript
public readonly multiFactorAuthRule: IResolvable | IdentityUserV3MultiFactorAuthRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>[]

multi_factor_auth_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#multi_factor_auth_rule IdentityUserV3#multi_factor_auth_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#name IdentityUserV3#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#password IdentityUserV3#password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#region IdentityUserV3#region}.

---

### IdentityUserV3MultiFactorAuthRule <a name="IdentityUserV3MultiFactorAuthRule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule.Initializer"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

const identityUserV3MultiFactorAuthRule: identityUserV3.IdentityUserV3MultiFactorAuthRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule.property.rule">rule</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#rule IdentityUserV3#rule}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule.property.rule"></a>

```typescript
public readonly rule: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_user_v3#rule IdentityUserV3#rule}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityUserV3MultiFactorAuthRuleList <a name="IdentityUserV3MultiFactorAuthRuleList" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

new identityUserV3.IdentityUserV3MultiFactorAuthRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.get"></a>

```typescript
public get(index: number): IdentityUserV3MultiFactorAuthRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityUserV3MultiFactorAuthRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>[]

---


### IdentityUserV3MultiFactorAuthRuleOutputReference <a name="IdentityUserV3MultiFactorAuthRuleOutputReference" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer"></a>

```typescript
import { identityUserV3 } from '@ithings/cdktf-provider-openstack'

new identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.ruleInput">ruleInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.rule">rule</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: string[];
```

- *Type:* string[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.rule"></a>

```typescript
public readonly rule: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityUserV3MultiFactorAuthRule;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityUserV3.IdentityUserV3MultiFactorAuthRule">IdentityUserV3MultiFactorAuthRule</a>

---



