# `keymanagerContainerV1` Submodule <a name="`keymanagerContainerV1` Submodule" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymanagerContainerV1 <a name="KeymanagerContainerV1" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1 openstack_keymanager_container_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1(scope: Construct, id: string, config: KeymanagerContainerV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config">KeymanagerContainerV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config">KeymanagerContainerV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putAcl">putAcl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putSecretRefs">putSecretRefs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetSecretRefs">resetSecretRefs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAcl` <a name="putAcl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putAcl"></a>

```typescript
public putAcl(value: KeymanagerContainerV1Acl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putAcl.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

---

##### `putSecretRefs` <a name="putSecretRefs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putSecretRefs"></a>

```typescript
public putSecretRefs(value: IResolvable | KeymanagerContainerV1SecretRefs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putSecretRefs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts"></a>

```typescript
public putTimeouts(value: KeymanagerContainerV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>

---

##### `resetAcl` <a name="resetAcl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretRefs` <a name="resetSecretRefs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetSecretRefs"></a>

```typescript
public resetSecretRefs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeymanagerContainerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isConstruct"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

keymanagerContainerV1.KeymanagerContainerV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformElement"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

keymanagerContainerV1.KeymanagerContainerV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformResource"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

keymanagerContainerV1.KeymanagerContainerV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeymanagerContainerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymanagerContainerV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymanagerContainerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeymanagerContainerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference">KeymanagerContainerV1AclOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.consumers">consumers</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList">KeymanagerContainerV1ConsumersList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.containerRef">containerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.creatorId">creatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefs">secretRefs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList">KeymanagerContainerV1SecretRefsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference">KeymanagerContainerV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.aclInput">aclInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefsInput">secretRefsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acl`<sup>Required</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.acl"></a>

```typescript
public readonly acl: KeymanagerContainerV1AclOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference">KeymanagerContainerV1AclOutputReference</a>

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.consumers"></a>

```typescript
public readonly consumers: KeymanagerContainerV1ConsumersList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList">KeymanagerContainerV1ConsumersList</a>

---

##### `containerRef`<sup>Required</sup> <a name="containerRef" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.containerRef"></a>

```typescript
public readonly containerRef: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.creatorId"></a>

```typescript
public readonly creatorId: string;
```

- *Type:* string

---

##### `secretRefs`<sup>Required</sup> <a name="secretRefs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefs"></a>

```typescript
public readonly secretRefs: KeymanagerContainerV1SecretRefsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList">KeymanagerContainerV1SecretRefsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeouts"></a>

```typescript
public readonly timeouts: KeymanagerContainerV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference">KeymanagerContainerV1TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.aclInput"></a>

```typescript
public readonly aclInput: KeymanagerContainerV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretRefsInput`<sup>Optional</sup> <a name="secretRefsInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.secretRefsInput"></a>

```typescript
public readonly secretRefsInput: IResolvable | KeymanagerContainerV1SecretRefs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeymanagerContainerV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymanagerContainerV1Acl <a name="KeymanagerContainerV1Acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerContainerV1Acl: keymanagerContainerV1.KeymanagerContainerV1Acl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a></code> | read block. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl.property.read"></a>

```typescript
public readonly read: KeymanagerContainerV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

read block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#read KeymanagerContainerV1#read}

---

### KeymanagerContainerV1AclRead <a name="KeymanagerContainerV1AclRead" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerContainerV1AclRead: keymanagerContainerV1.KeymanagerContainerV1AclRead = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.projectAccess">projectAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#project_access KeymanagerContainerV1#project_access}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#users KeymanagerContainerV1#users}. |

---

##### `projectAccess`<sup>Optional</sup> <a name="projectAccess" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.projectAccess"></a>

```typescript
public readonly projectAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#project_access KeymanagerContainerV1#project_access}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#users KeymanagerContainerV1#users}.

---

### KeymanagerContainerV1Config <a name="KeymanagerContainerV1Config" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerContainerV1Config: keymanagerContainerV1.KeymanagerContainerV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#type KeymanagerContainerV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a></code> | acl block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#id KeymanagerContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#region KeymanagerContainerV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.secretRefs">secretRefs</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>[]</code> | secret_refs block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#type KeymanagerContainerV1#type}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.acl"></a>

```typescript
public readonly acl: KeymanagerContainerV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#acl KeymanagerContainerV1#acl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#id KeymanagerContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#region KeymanagerContainerV1#region}.

---

##### `secretRefs`<sup>Optional</sup> <a name="secretRefs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.secretRefs"></a>

```typescript
public readonly secretRefs: IResolvable | KeymanagerContainerV1SecretRefs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>[]

secret_refs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#secret_refs KeymanagerContainerV1#secret_refs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: KeymanagerContainerV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#timeouts KeymanagerContainerV1#timeouts}

---

### KeymanagerContainerV1Consumers <a name="KeymanagerContainerV1Consumers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerContainerV1Consumers: keymanagerContainerV1.KeymanagerContainerV1Consumers = { ... }
```


### KeymanagerContainerV1SecretRefs <a name="KeymanagerContainerV1SecretRefs" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerContainerV1SecretRefs: keymanagerContainerV1.KeymanagerContainerV1SecretRefs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.secretRef">secretRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#secret_ref KeymanagerContainerV1#secret_ref}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}. |

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.secretRef"></a>

```typescript
public readonly secretRef: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#secret_ref KeymanagerContainerV1#secret_ref}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#name KeymanagerContainerV1#name}.

---

### KeymanagerContainerV1Timeouts <a name="KeymanagerContainerV1Timeouts" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerContainerV1Timeouts: keymanagerContainerV1.KeymanagerContainerV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#create KeymanagerContainerV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#delete KeymanagerContainerV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#update KeymanagerContainerV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#create KeymanagerContainerV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#delete KeymanagerContainerV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_container_v1#update KeymanagerContainerV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeymanagerContainerV1AclOutputReference <a name="KeymanagerContainerV1AclOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1AclOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.putRead">putRead</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRead` <a name="putRead" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.putRead"></a>

```typescript
public putRead(value: KeymanagerContainerV1AclRead): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.putRead.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

---

##### `resetRead` <a name="resetRead" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference">KeymanagerContainerV1AclReadOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.readInput">readInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.read"></a>

```typescript
public readonly read: KeymanagerContainerV1AclReadOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference">KeymanagerContainerV1AclReadOutputReference</a>

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.readInput"></a>

```typescript
public readonly readInput: KeymanagerContainerV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeymanagerContainerV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Acl">KeymanagerContainerV1Acl</a>

---


### KeymanagerContainerV1AclReadOutputReference <a name="KeymanagerContainerV1AclReadOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetProjectAccess">resetProjectAccess</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectAccess` <a name="resetProjectAccess" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetProjectAccess"></a>

```typescript
public resetProjectAccess(): void
```

##### `resetUsers` <a name="resetUsers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.resetUsers"></a>

```typescript
public resetUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccessInput">projectAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccess">projectAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `projectAccessInput`<sup>Optional</sup> <a name="projectAccessInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccessInput"></a>

```typescript
public readonly projectAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `projectAccess`<sup>Required</sup> <a name="projectAccess" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.projectAccess"></a>

```typescript
public readonly projectAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `users`<sup>Required</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclReadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeymanagerContainerV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1AclRead">KeymanagerContainerV1AclRead</a>

---


### KeymanagerContainerV1ConsumersList <a name="KeymanagerContainerV1ConsumersList" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1ConsumersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.get"></a>

```typescript
public get(index: number): KeymanagerContainerV1ConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KeymanagerContainerV1ConsumersOutputReference <a name="KeymanagerContainerV1ConsumersOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers">KeymanagerContainerV1Consumers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1ConsumersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeymanagerContainerV1Consumers;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Consumers">KeymanagerContainerV1Consumers</a>

---


### KeymanagerContainerV1SecretRefsList <a name="KeymanagerContainerV1SecretRefsList" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1SecretRefsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.get"></a>

```typescript
public get(index: number): KeymanagerContainerV1SecretRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeymanagerContainerV1SecretRefs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>[]

---


### KeymanagerContainerV1SecretRefsOutputReference <a name="KeymanagerContainerV1SecretRefsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRefInput">secretRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRef">secretRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRefInput"></a>

```typescript
public readonly secretRefInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeymanagerContainerV1SecretRefs;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1SecretRefs">KeymanagerContainerV1SecretRefs</a>

---


### KeymanagerContainerV1TimeoutsOutputReference <a name="KeymanagerContainerV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { keymanagerContainerV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeymanagerContainerV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerContainerV1.KeymanagerContainerV1Timeouts">KeymanagerContainerV1Timeouts</a>

---



