# `computeServergroupV2` Submodule <a name="`computeServergroupV2` Submodule" id="@ithings/cdktf-provider-openstack.computeServergroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeServergroupV2 <a name="ComputeServergroupV2" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2 openstack_compute_servergroup_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

new computeServergroupV2.ComputeServergroupV2(scope: Construct, id: string, config: ComputeServergroupV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config">ComputeServergroupV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config">ComputeServergroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.putRules"></a>

```typescript
public putRules(value: ComputeServergroupV2Rules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.putRules.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRules` <a name="resetRules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeServergroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isConstruct"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

computeServergroupV2.ComputeServergroupV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformElement"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

computeServergroupV2.ComputeServergroupV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformResource"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

computeServergroupV2.ComputeServergroupV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

computeServergroupV2.ComputeServergroupV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeServergroupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeServergroupV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeServergroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeServergroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rules">rules</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference">ComputeServergroupV2RulesOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rulesInput">rulesInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rules"></a>

```typescript
public readonly rules: ComputeServergroupV2RulesOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference">ComputeServergroupV2RulesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.rulesInput"></a>

```typescript
public readonly rulesInput: ComputeServergroupV2Rules;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeServergroupV2Config <a name="ComputeServergroupV2Config" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.Initializer"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

const computeServergroupV2Config: computeServergroupV2.ComputeServergroupV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#name ComputeServergroupV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#id ComputeServergroupV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.policies">policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#policies ComputeServergroupV2#policies}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#region ComputeServergroupV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.rules">rules</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a></code> | rules block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#value_specs ComputeServergroupV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#name ComputeServergroupV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#id ComputeServergroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#policies ComputeServergroupV2#policies}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#region ComputeServergroupV2#region}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.rules"></a>

```typescript
public readonly rules: ComputeServergroupV2Rules;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#rules ComputeServergroupV2#rules}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#value_specs ComputeServergroupV2#value_specs}.

---

### ComputeServergroupV2Rules <a name="ComputeServergroupV2Rules" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules.Initializer"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

const computeServergroupV2Rules: computeServergroupV2.ComputeServergroupV2Rules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules.property.maxServerPerHost">maxServerPerHost</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#max_server_per_host ComputeServergroupV2#max_server_per_host}. |

---

##### `maxServerPerHost`<sup>Optional</sup> <a name="maxServerPerHost" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules.property.maxServerPerHost"></a>

```typescript
public readonly maxServerPerHost: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_servergroup_v2#max_server_per_host ComputeServergroupV2#max_server_per_host}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeServergroupV2RulesOutputReference <a name="ComputeServergroupV2RulesOutputReference" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer"></a>

```typescript
import { computeServergroupV2 } from '@ithings/cdktf-provider-openstack'

new computeServergroupV2.ComputeServergroupV2RulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resetMaxServerPerHost">resetMaxServerPerHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxServerPerHost` <a name="resetMaxServerPerHost" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.resetMaxServerPerHost"></a>

```typescript
public resetMaxServerPerHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHostInput">maxServerPerHostInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHost">maxServerPerHost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxServerPerHostInput`<sup>Optional</sup> <a name="maxServerPerHostInput" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHostInput"></a>

```typescript
public readonly maxServerPerHostInput: number;
```

- *Type:* number

---

##### `maxServerPerHost`<sup>Required</sup> <a name="maxServerPerHost" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.maxServerPerHost"></a>

```typescript
public readonly maxServerPerHost: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2RulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeServergroupV2Rules;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeServergroupV2.ComputeServergroupV2Rules">ComputeServergroupV2Rules</a>

---



