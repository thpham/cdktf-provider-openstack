# `objectstorageTempurlV1` Submodule <a name="`objectstorageTempurlV1` Submodule" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageTempurlV1 <a name="ObjectstorageTempurlV1" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1 openstack_objectstorage_tempurl_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.Initializer"></a>

```typescript
import { objectstorageTempurlV1 } from '@ithings/cdktf-provider-openstack'

new objectstorageTempurlV1.ObjectstorageTempurlV1(scope: Construct, id: string, config: ObjectstorageTempurlV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config">ObjectstorageTempurlV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config">ObjectstorageTempurlV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetRegenerate">resetRegenerate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetSplit">resetSplit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMethod` <a name="resetMethod" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetRegenerate` <a name="resetRegenerate" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetRegenerate"></a>

```typescript
public resetRegenerate(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSplit` <a name="resetSplit" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.resetSplit"></a>

```typescript
public resetSplit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageTempurlV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isConstruct"></a>

```typescript
import { objectstorageTempurlV1 } from '@ithings/cdktf-provider-openstack'

objectstorageTempurlV1.ObjectstorageTempurlV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformElement"></a>

```typescript
import { objectstorageTempurlV1 } from '@ithings/cdktf-provider-openstack'

objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformResource"></a>

```typescript
import { objectstorageTempurlV1 } from '@ithings/cdktf-provider-openstack'

objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.generateConfigForImport"></a>

```typescript
import { objectstorageTempurlV1 } from '@ithings/cdktf-provider-openstack'

objectstorageTempurlV1.ObjectstorageTempurlV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectstorageTempurlV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageTempurlV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageTempurlV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageTempurlV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.regenerateInput">regenerateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.splitInput">splitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.regenerate">regenerate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.split">split</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `regenerateInput`<sup>Optional</sup> <a name="regenerateInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.regenerateInput"></a>

```typescript
public readonly regenerateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `splitInput`<sup>Optional</sup> <a name="splitInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.splitInput"></a>

```typescript
public readonly splitInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `container`<sup>Required</sup> <a name="container" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `regenerate`<sup>Required</sup> <a name="regenerate" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.regenerate"></a>

```typescript
public readonly regenerate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `split`<sup>Required</sup> <a name="split" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.split"></a>

```typescript
public readonly split: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageTempurlV1Config <a name="ObjectstorageTempurlV1Config" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.Initializer"></a>

```typescript
import { objectstorageTempurlV1 } from '@ithings/cdktf-provider-openstack'

const objectstorageTempurlV1Config: objectstorageTempurlV1.ObjectstorageTempurlV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.container">container</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#container ObjectstorageTempurlV1#container}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#object ObjectstorageTempurlV1#object}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#ttl ObjectstorageTempurlV1#ttl}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#id ObjectstorageTempurlV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#method ObjectstorageTempurlV1#method}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.regenerate">regenerate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#regenerate ObjectstorageTempurlV1#regenerate}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#region ObjectstorageTempurlV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.split">split</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#split ObjectstorageTempurlV1#split}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `container`<sup>Required</sup> <a name="container" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#container ObjectstorageTempurlV1#container}.

---

##### `object`<sup>Required</sup> <a name="object" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#object ObjectstorageTempurlV1#object}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#ttl ObjectstorageTempurlV1#ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#id ObjectstorageTempurlV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#method ObjectstorageTempurlV1#method}.

---

##### `regenerate`<sup>Optional</sup> <a name="regenerate" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.regenerate"></a>

```typescript
public readonly regenerate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#regenerate ObjectstorageTempurlV1#regenerate}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#region ObjectstorageTempurlV1#region}.

---

##### `split`<sup>Optional</sup> <a name="split" id="@ithings/cdktf-provider-openstack.objectstorageTempurlV1.ObjectstorageTempurlV1Config.property.split"></a>

```typescript
public readonly split: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_tempurl_v1#split ObjectstorageTempurlV1#split}.

---



