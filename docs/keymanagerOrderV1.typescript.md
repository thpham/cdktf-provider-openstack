# `keymanagerOrderV1` Submodule <a name="`keymanagerOrderV1` Submodule" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymanagerOrderV1 <a name="KeymanagerOrderV1" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1 openstack_keymanager_order_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerOrderV1.KeymanagerOrderV1(scope: Construct, id: string, config: KeymanagerOrderV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config">KeymanagerOrderV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config">KeymanagerOrderV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta">putMeta</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMeta` <a name="putMeta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta"></a>

```typescript
public putMeta(value: KeymanagerOrderV1Meta): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putMeta.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putTimeouts"></a>

```typescript
public putTimeouts(value: KeymanagerOrderV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeymanagerOrderV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isConstruct"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

keymanagerOrderV1.KeymanagerOrderV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformElement"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

keymanagerOrderV1.KeymanagerOrderV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformResource"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

keymanagerOrderV1.KeymanagerOrderV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeymanagerOrderV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymanagerOrderV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymanagerOrderV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeymanagerOrderV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.containerRef">containerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.creatorId">creatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.meta">meta</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference">KeymanagerOrderV1MetaOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.orderRef">orderRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.secretRef">secretRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatus">subStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatusMessage">subStatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference">KeymanagerOrderV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.metaInput">metaInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerRef`<sup>Required</sup> <a name="containerRef" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.containerRef"></a>

```typescript
public readonly containerRef: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.creatorId"></a>

```typescript
public readonly creatorId: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.meta"></a>

```typescript
public readonly meta: KeymanagerOrderV1MetaOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference">KeymanagerOrderV1MetaOutputReference</a>

---

##### `orderRef`<sup>Required</sup> <a name="orderRef" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.orderRef"></a>

```typescript
public readonly orderRef: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.secretRef"></a>

```typescript
public readonly secretRef: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subStatus`<sup>Required</sup> <a name="subStatus" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatus"></a>

```typescript
public readonly subStatus: string;
```

- *Type:* string

---

##### `subStatusMessage`<sup>Required</sup> <a name="subStatusMessage" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.subStatusMessage"></a>

```typescript
public readonly subStatusMessage: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeouts"></a>

```typescript
public readonly timeouts: KeymanagerOrderV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference">KeymanagerOrderV1TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.metaInput"></a>

```typescript
public readonly metaInput: KeymanagerOrderV1Meta;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeymanagerOrderV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymanagerOrderV1Config <a name="KeymanagerOrderV1Config" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.Initializer"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerOrderV1Config: keymanagerOrderV1.KeymanagerOrderV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.meta">meta</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a></code> | meta block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#type KeymanagerOrderV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#id KeymanagerOrderV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#region KeymanagerOrderV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.meta"></a>

```typescript
public readonly meta: KeymanagerOrderV1Meta;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

meta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#meta KeymanagerOrderV1#meta}

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#type KeymanagerOrderV1#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#id KeymanagerOrderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#region KeymanagerOrderV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: KeymanagerOrderV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#timeouts KeymanagerOrderV1#timeouts}

---

### KeymanagerOrderV1Meta <a name="KeymanagerOrderV1Meta" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.Initializer"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerOrderV1Meta: keymanagerOrderV1.KeymanagerOrderV1Meta = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#algorithm KeymanagerOrderV1#algorithm}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.bitLength">bitLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#bit_length KeymanagerOrderV1#bit_length}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.expiration">expiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#expiration KeymanagerOrderV1#expiration}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#mode KeymanagerOrderV1#mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#name KeymanagerOrderV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.payloadContentType">payloadContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#payload_content_type KeymanagerOrderV1#payload_content_type}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#algorithm KeymanagerOrderV1#algorithm}.

---

##### `bitLength`<sup>Required</sup> <a name="bitLength" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.bitLength"></a>

```typescript
public readonly bitLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#bit_length KeymanagerOrderV1#bit_length}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#expiration KeymanagerOrderV1#expiration}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#mode KeymanagerOrderV1#mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#name KeymanagerOrderV1#name}.

---

##### `payloadContentType`<sup>Optional</sup> <a name="payloadContentType" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta.property.payloadContentType"></a>

```typescript
public readonly payloadContentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#payload_content_type KeymanagerOrderV1#payload_content_type}.

---

### KeymanagerOrderV1Timeouts <a name="KeymanagerOrderV1Timeouts" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.Initializer"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

const keymanagerOrderV1Timeouts: keymanagerOrderV1.KeymanagerOrderV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#create KeymanagerOrderV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#delete KeymanagerOrderV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#create KeymanagerOrderV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_order_v1#delete KeymanagerOrderV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeymanagerOrderV1MetaOutputReference <a name="KeymanagerOrderV1MetaOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetPayloadContentType">resetPayloadContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiration` <a name="resetExpiration" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetMode` <a name="resetMode" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPayloadContentType` <a name="resetPayloadContentType" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.resetPayloadContentType"></a>

```typescript
public resetPayloadContentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLengthInput">bitLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentTypeInput">payloadContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLength">bitLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentType">payloadContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `bitLengthInput`<sup>Optional</sup> <a name="bitLengthInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLengthInput"></a>

```typescript
public readonly bitLengthInput: number;
```

- *Type:* number

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payloadContentTypeInput`<sup>Optional</sup> <a name="payloadContentTypeInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentTypeInput"></a>

```typescript
public readonly payloadContentTypeInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `bitLength`<sup>Required</sup> <a name="bitLength" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.bitLength"></a>

```typescript
public readonly bitLength: number;
```

- *Type:* number

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `payloadContentType`<sup>Required</sup> <a name="payloadContentType" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.payloadContentType"></a>

```typescript
public readonly payloadContentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1MetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeymanagerOrderV1Meta;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Meta">KeymanagerOrderV1Meta</a>

---


### KeymanagerOrderV1TimeoutsOutputReference <a name="KeymanagerOrderV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { keymanagerOrderV1 } from '@ithings/cdktf-provider-openstack'

new keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeymanagerOrderV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.keymanagerOrderV1.KeymanagerOrderV1Timeouts">KeymanagerOrderV1Timeouts</a>

---



