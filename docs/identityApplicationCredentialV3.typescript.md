# `identityApplicationCredentialV3` Submodule <a name="`identityApplicationCredentialV3` Submodule" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityApplicationCredentialV3 <a name="IdentityApplicationCredentialV3" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3 openstack_identity_application_credential_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

new identityApplicationCredentialV3.IdentityApplicationCredentialV3(scope: Construct, id: string, config: IdentityApplicationCredentialV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config">IdentityApplicationCredentialV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config">IdentityApplicationCredentialV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.putAccessRules">putAccessRules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetAccessRules">resetAccessRules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetUnrestricted">resetUnrestricted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessRules` <a name="putAccessRules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.putAccessRules"></a>

```typescript
public putAccessRules(value: IResolvable | IdentityApplicationCredentialV3AccessRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.putAccessRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>[]

---

##### `resetAccessRules` <a name="resetAccessRules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetAccessRules"></a>

```typescript
public resetAccessRules(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoles` <a name="resetRoles" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetSecret` <a name="resetSecret" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetUnrestricted` <a name="resetUnrestricted" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.resetUnrestricted"></a>

```typescript
public resetUnrestricted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityApplicationCredentialV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isConstruct"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

identityApplicationCredentialV3.IdentityApplicationCredentialV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformElement"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformResource"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityApplicationCredentialV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityApplicationCredentialV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityApplicationCredentialV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityApplicationCredentialV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRules">accessRules</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList">IdentityApplicationCredentialV3AccessRulesList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRulesInput">accessRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestrictedInput">unrestrictedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestricted">unrestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessRules`<sup>Required</sup> <a name="accessRules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRules"></a>

```typescript
public readonly accessRules: IdentityApplicationCredentialV3AccessRulesList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList">IdentityApplicationCredentialV3AccessRulesList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `accessRulesInput`<sup>Optional</sup> <a name="accessRulesInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.accessRulesInput"></a>

```typescript
public readonly accessRulesInput: IResolvable | IdentityApplicationCredentialV3AccessRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `unrestrictedInput`<sup>Optional</sup> <a name="unrestrictedInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestrictedInput"></a>

```typescript
public readonly unrestrictedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `unrestricted`<sup>Required</sup> <a name="unrestricted" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.unrestricted"></a>

```typescript
public readonly unrestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityApplicationCredentialV3AccessRules <a name="IdentityApplicationCredentialV3AccessRules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.Initializer"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

const identityApplicationCredentialV3AccessRules: identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#method IdentityApplicationCredentialV3#method}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#path IdentityApplicationCredentialV3#path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#service IdentityApplicationCredentialV3#service}. |

---

##### `method`<sup>Required</sup> <a name="method" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#method IdentityApplicationCredentialV3#method}.

---

##### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#path IdentityApplicationCredentialV3#path}.

---

##### `service`<sup>Required</sup> <a name="service" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#service IdentityApplicationCredentialV3#service}.

---

### IdentityApplicationCredentialV3Config <a name="IdentityApplicationCredentialV3Config" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.Initializer"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

const identityApplicationCredentialV3Config: identityApplicationCredentialV3.IdentityApplicationCredentialV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#name IdentityApplicationCredentialV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.accessRules">accessRules</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>[]</code> | access_rules block. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#description IdentityApplicationCredentialV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.expiresAt">expiresAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#expires_at IdentityApplicationCredentialV3#expires_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#id IdentityApplicationCredentialV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#region IdentityApplicationCredentialV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.roles">roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#roles IdentityApplicationCredentialV3#roles}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.secret">secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#secret IdentityApplicationCredentialV3#secret}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.unrestricted">unrestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#unrestricted IdentityApplicationCredentialV3#unrestricted}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#name IdentityApplicationCredentialV3#name}.

---

##### `accessRules`<sup>Optional</sup> <a name="accessRules" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.accessRules"></a>

```typescript
public readonly accessRules: IResolvable | IdentityApplicationCredentialV3AccessRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>[]

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#access_rules IdentityApplicationCredentialV3#access_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#description IdentityApplicationCredentialV3#description}.

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#expires_at IdentityApplicationCredentialV3#expires_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#id IdentityApplicationCredentialV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#region IdentityApplicationCredentialV3#region}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#roles IdentityApplicationCredentialV3#roles}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#secret IdentityApplicationCredentialV3#secret}.

---

##### `unrestricted`<sup>Optional</sup> <a name="unrestricted" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3Config.property.unrestricted"></a>

```typescript
public readonly unrestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_application_credential_v3#unrestricted IdentityApplicationCredentialV3#unrestricted}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityApplicationCredentialV3AccessRulesList <a name="IdentityApplicationCredentialV3AccessRulesList" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

new identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.get"></a>

```typescript
public get(index: number): IdentityApplicationCredentialV3AccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityApplicationCredentialV3AccessRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>[]

---


### IdentityApplicationCredentialV3AccessRulesOutputReference <a name="IdentityApplicationCredentialV3AccessRulesOutputReference" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer"></a>

```typescript
import { identityApplicationCredentialV3 } from '@ithings/cdktf-provider-openstack'

new identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityApplicationCredentialV3AccessRules;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.identityApplicationCredentialV3.IdentityApplicationCredentialV3AccessRules">IdentityApplicationCredentialV3AccessRules</a>

---



