# `computeFlavorV2` Submodule <a name="`computeFlavorV2` Submodule" id="@ithings/cdktf-provider-openstack.computeFlavorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFlavorV2 <a name="ComputeFlavorV2" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2 openstack_compute_flavor_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer"></a>

```typescript
import { computeFlavorV2 } from '@ithings/cdktf-provider-openstack'

new computeFlavorV2.ComputeFlavorV2(scope: Construct, id: string, config: ComputeFlavorV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config">ComputeFlavorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config">ComputeFlavorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetEphemeral">resetEphemeral</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetExtraSpecs">resetExtraSpecs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetFlavorId">resetFlavorId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRxTxFactor">resetRxTxFactor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetSwap">resetSwap</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEphemeral` <a name="resetEphemeral" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetEphemeral"></a>

```typescript
public resetEphemeral(): void
```

##### `resetExtraSpecs` <a name="resetExtraSpecs" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetExtraSpecs"></a>

```typescript
public resetExtraSpecs(): void
```

##### `resetFlavorId` <a name="resetFlavorId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetFlavorId"></a>

```typescript
public resetFlavorId(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRxTxFactor` <a name="resetRxTxFactor" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRxTxFactor"></a>

```typescript
public resetRxTxFactor(): void
```

##### `resetSwap` <a name="resetSwap" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetSwap"></a>

```typescript
public resetSwap(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeFlavorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isConstruct"></a>

```typescript
import { computeFlavorV2 } from '@ithings/cdktf-provider-openstack'

computeFlavorV2.ComputeFlavorV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformElement"></a>

```typescript
import { computeFlavorV2 } from '@ithings/cdktf-provider-openstack'

computeFlavorV2.ComputeFlavorV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformResource"></a>

```typescript
import { computeFlavorV2 } from '@ithings/cdktf-provider-openstack'

computeFlavorV2.ComputeFlavorV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport"></a>

```typescript
import { computeFlavorV2 } from '@ithings/cdktf-provider-openstack'

computeFlavorV2.ComputeFlavorV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeFlavorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeFlavorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeFlavorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeFlavorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.diskInput">diskInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeralInput">ephemeralInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecsInput">extraSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorIdInput">flavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ramInput">ramInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactorInput">rxTxFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swapInput">swapInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpusInput">vcpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.disk">disk</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeral">ephemeral</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecs">extraSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactor">rxTxFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swap">swap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpus">vcpus</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.diskInput"></a>

```typescript
public readonly diskInput: number;
```

- *Type:* number

---

##### `ephemeralInput`<sup>Optional</sup> <a name="ephemeralInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeralInput"></a>

```typescript
public readonly ephemeralInput: number;
```

- *Type:* number

---

##### `extraSpecsInput`<sup>Optional</sup> <a name="extraSpecsInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecsInput"></a>

```typescript
public readonly extraSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorIdInput"></a>

```typescript
public readonly flavorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ramInput"></a>

```typescript
public readonly ramInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rxTxFactorInput`<sup>Optional</sup> <a name="rxTxFactorInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactorInput"></a>

```typescript
public readonly rxTxFactorInput: number;
```

- *Type:* number

---

##### `swapInput`<sup>Optional</sup> <a name="swapInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swapInput"></a>

```typescript
public readonly swapInput: number;
```

- *Type:* number

---

##### `vcpusInput`<sup>Optional</sup> <a name="vcpusInput" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpusInput"></a>

```typescript
public readonly vcpusInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

---

##### `ephemeral`<sup>Required</sup> <a name="ephemeral" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeral"></a>

```typescript
public readonly ephemeral: number;
```

- *Type:* number

---

##### `extraSpecs`<sup>Required</sup> <a name="extraSpecs" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecs"></a>

```typescript
public readonly extraSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ram`<sup>Required</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rxTxFactor`<sup>Required</sup> <a name="rxTxFactor" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactor"></a>

```typescript
public readonly rxTxFactor: number;
```

- *Type:* number

---

##### `swap`<sup>Required</sup> <a name="swap" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swap"></a>

```typescript
public readonly swap: number;
```

- *Type:* number

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFlavorV2Config <a name="ComputeFlavorV2Config" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.Initializer"></a>

```typescript
import { computeFlavorV2 } from '@ithings/cdktf-provider-openstack'

const computeFlavorV2Config: computeFlavorV2.ComputeFlavorV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.disk">disk</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#disk ComputeFlavorV2#disk}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#name ComputeFlavorV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ram">ram</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ram ComputeFlavorV2#ram}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.vcpus">vcpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#vcpus ComputeFlavorV2#vcpus}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#description ComputeFlavorV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ephemeral">ephemeral</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ephemeral ComputeFlavorV2#ephemeral}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.extraSpecs">extraSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#extra_specs ComputeFlavorV2#extra_specs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.flavorId">flavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#flavor_id ComputeFlavorV2#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#id ComputeFlavorV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#is_public ComputeFlavorV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#region ComputeFlavorV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.rxTxFactor">rxTxFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#rx_tx_factor ComputeFlavorV2#rx_tx_factor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.swap">swap</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#swap ComputeFlavorV2#swap}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#disk ComputeFlavorV2#disk}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#name ComputeFlavorV2#name}.

---

##### `ram`<sup>Required</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ram ComputeFlavorV2#ram}.

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#vcpus ComputeFlavorV2#vcpus}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#description ComputeFlavorV2#description}.

---

##### `ephemeral`<sup>Optional</sup> <a name="ephemeral" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ephemeral"></a>

```typescript
public readonly ephemeral: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ephemeral ComputeFlavorV2#ephemeral}.

---

##### `extraSpecs`<sup>Optional</sup> <a name="extraSpecs" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.extraSpecs"></a>

```typescript
public readonly extraSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#extra_specs ComputeFlavorV2#extra_specs}.

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#flavor_id ComputeFlavorV2#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#id ComputeFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#is_public ComputeFlavorV2#is_public}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#region ComputeFlavorV2#region}.

---

##### `rxTxFactor`<sup>Optional</sup> <a name="rxTxFactor" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.rxTxFactor"></a>

```typescript
public readonly rxTxFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#rx_tx_factor ComputeFlavorV2#rx_tx_factor}.

---

##### `swap`<sup>Optional</sup> <a name="swap" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.swap"></a>

```typescript
public readonly swap: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#swap ComputeFlavorV2#swap}.

---



