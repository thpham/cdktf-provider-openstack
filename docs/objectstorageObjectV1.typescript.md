# `objectstorageObjectV1` Submodule <a name="`objectstorageObjectV1` Submodule" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObjectV1 <a name="ObjectstorageObjectV1" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1 openstack_objectstorage_object_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer"></a>

```typescript
import { objectstorageObjectV1 } from '@ithings/cdktf-provider-openstack'

new objectstorageObjectV1.ObjectstorageObjectV1(scope: Construct, id: string, config: ObjectstorageObjectV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config">ObjectstorageObjectV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config">ObjectstorageObjectV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetCopyFrom">resetCopyFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAfter">resetDeleteAfter</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAt">resetDeleteAt</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDetectContentType">resetDetectContentType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetObjectManifest">resetObjectManifest</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContent` <a name="resetContent" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentType` <a name="resetContentType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCopyFrom` <a name="resetCopyFrom" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetCopyFrom"></a>

```typescript
public resetCopyFrom(): void
```

##### `resetDeleteAfter` <a name="resetDeleteAfter" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAfter"></a>

```typescript
public resetDeleteAfter(): void
```

##### `resetDeleteAt` <a name="resetDeleteAt" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDeleteAt"></a>

```typescript
public resetDeleteAt(): void
```

##### `resetDetectContentType` <a name="resetDetectContentType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetDetectContentType"></a>

```typescript
public resetDetectContentType(): void
```

##### `resetEtag` <a name="resetEtag" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetObjectManifest` <a name="resetObjectManifest" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetObjectManifest"></a>

```typescript
public resetObjectManifest(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSource` <a name="resetSource" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageObjectV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isConstruct"></a>

```typescript
import { objectstorageObjectV1 } from '@ithings/cdktf-provider-openstack'

objectstorageObjectV1.ObjectstorageObjectV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformElement"></a>

```typescript
import { objectstorageObjectV1 } from '@ithings/cdktf-provider-openstack'

objectstorageObjectV1.ObjectstorageObjectV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformResource"></a>

```typescript
import { objectstorageObjectV1 } from '@ithings/cdktf-provider-openstack'

objectstorageObjectV1.ObjectstorageObjectV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport"></a>

```typescript
import { objectstorageObjectV1 } from '@ithings/cdktf-provider-openstack'

objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectstorageObjectV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageObjectV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageObjectV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObjectV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentLength">contentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.transId">transId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFromInput">copyFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfterInput">deleteAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAtInput">deleteAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentTypeInput">detectContentTypeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifestInput">objectManifestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFrom">copyFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfter">deleteAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAt">deleteAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentType">detectContentType</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifest">objectManifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentLength"></a>

```typescript
public readonly contentLength: number;
```

- *Type:* number

---

##### `date`<sup>Required</sup> <a name="date" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `transId`<sup>Required</sup> <a name="transId" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.transId"></a>

```typescript
public readonly transId: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `copyFromInput`<sup>Optional</sup> <a name="copyFromInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFromInput"></a>

```typescript
public readonly copyFromInput: string;
```

- *Type:* string

---

##### `deleteAfterInput`<sup>Optional</sup> <a name="deleteAfterInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfterInput"></a>

```typescript
public readonly deleteAfterInput: number;
```

- *Type:* number

---

##### `deleteAtInput`<sup>Optional</sup> <a name="deleteAtInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAtInput"></a>

```typescript
public readonly deleteAtInput: string;
```

- *Type:* string

---

##### `detectContentTypeInput`<sup>Optional</sup> <a name="detectContentTypeInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentTypeInput"></a>

```typescript
public readonly detectContentTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectManifestInput`<sup>Optional</sup> <a name="objectManifestInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifestInput"></a>

```typescript
public readonly objectManifestInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `copyFrom`<sup>Required</sup> <a name="copyFrom" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.copyFrom"></a>

```typescript
public readonly copyFrom: string;
```

- *Type:* string

---

##### `deleteAfter`<sup>Required</sup> <a name="deleteAfter" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAfter"></a>

```typescript
public readonly deleteAfter: number;
```

- *Type:* number

---

##### `deleteAt`<sup>Required</sup> <a name="deleteAt" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.deleteAt"></a>

```typescript
public readonly deleteAt: string;
```

- *Type:* string

---

##### `detectContentType`<sup>Required</sup> <a name="detectContentType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.detectContentType"></a>

```typescript
public readonly detectContentType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectManifest`<sup>Required</sup> <a name="objectManifest" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.objectManifest"></a>

```typescript
public readonly objectManifest: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectV1Config <a name="ObjectstorageObjectV1Config" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.Initializer"></a>

```typescript
import { objectstorageObjectV1 } from '@ithings/cdktf-provider-openstack'

const objectstorageObjectV1Config: objectstorageObjectV1.ObjectstorageObjectV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#container_name ObjectstorageObjectV1#container_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#name ObjectstorageObjectV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content ObjectstorageObjectV1#content}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_disposition ObjectstorageObjectV1#content_disposition}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_encoding ObjectstorageObjectV1#content_encoding}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_type ObjectstorageObjectV1#content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.copyFrom">copyFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#copy_from ObjectstorageObjectV1#copy_from}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAfter">deleteAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_after ObjectstorageObjectV1#delete_after}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAt">deleteAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_at ObjectstorageObjectV1#delete_at}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.detectContentType">detectContentType</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#detect_content_type ObjectstorageObjectV1#detect_content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#etag ObjectstorageObjectV1#etag}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#id ObjectstorageObjectV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#metadata ObjectstorageObjectV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.objectManifest">objectManifest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#object_manifest ObjectstorageObjectV1#object_manifest}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#region ObjectstorageObjectV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#source ObjectstorageObjectV1#source}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#container_name ObjectstorageObjectV1#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#name ObjectstorageObjectV1#name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content ObjectstorageObjectV1#content}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_disposition ObjectstorageObjectV1#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_encoding ObjectstorageObjectV1#content_encoding}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#content_type ObjectstorageObjectV1#content_type}.

---

##### `copyFrom`<sup>Optional</sup> <a name="copyFrom" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.copyFrom"></a>

```typescript
public readonly copyFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#copy_from ObjectstorageObjectV1#copy_from}.

---

##### `deleteAfter`<sup>Optional</sup> <a name="deleteAfter" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAfter"></a>

```typescript
public readonly deleteAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_after ObjectstorageObjectV1#delete_after}.

---

##### `deleteAt`<sup>Optional</sup> <a name="deleteAt" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.deleteAt"></a>

```typescript
public readonly deleteAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#delete_at ObjectstorageObjectV1#delete_at}.

---

##### `detectContentType`<sup>Optional</sup> <a name="detectContentType" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.detectContentType"></a>

```typescript
public readonly detectContentType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#detect_content_type ObjectstorageObjectV1#detect_content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#etag ObjectstorageObjectV1#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#id ObjectstorageObjectV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#metadata ObjectstorageObjectV1#metadata}.

---

##### `objectManifest`<sup>Optional</sup> <a name="objectManifest" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.objectManifest"></a>

```typescript
public readonly objectManifest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#object_manifest ObjectstorageObjectV1#object_manifest}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#region ObjectstorageObjectV1#region}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@ithings/cdktf-provider-openstack.objectstorageObjectV1.ObjectstorageObjectV1Config.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_object_v1#source ObjectstorageObjectV1#source}.

---



