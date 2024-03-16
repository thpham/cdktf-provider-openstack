# `fwPolicyV1` Submodule <a name="`fwPolicyV1` Submodule" id="@ithings/cdktf-provider-openstack.fwPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FwPolicyV1 <a name="FwPolicyV1" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1 openstack_fw_policy_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.Initializer"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

new fwPolicyV1.FwPolicyV1(scope: Construct, id: string, config?: FwPolicyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config">FwPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config">FwPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetAudited">resetAudited</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetShared">resetShared</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.putTimeouts"></a>

```typescript
public putTimeouts(value: FwPolicyV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts">FwPolicyV1Timeouts</a>

---

##### `resetAudited` <a name="resetAudited" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetAudited"></a>

```typescript
public resetAudited(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRules` <a name="resetRules" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetShared` <a name="resetShared" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetShared"></a>

```typescript
public resetShared(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FwPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isConstruct"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

fwPolicyV1.FwPolicyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isTerraformElement"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

fwPolicyV1.FwPolicyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isTerraformResource"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

fwPolicyV1.FwPolicyV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.generateConfigForImport"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

fwPolicyV1.FwPolicyV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FwPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FwPolicyV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FwPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FwPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference">FwPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.auditedInput">auditedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.rulesInput">rulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts">FwPolicyV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.audited">audited</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.rules">rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.timeouts"></a>

```typescript
public readonly timeouts: FwPolicyV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference">FwPolicyV1TimeoutsOutputReference</a>

---

##### `auditedInput`<sup>Optional</sup> <a name="auditedInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.auditedInput"></a>

```typescript
public readonly auditedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.rulesInput"></a>

```typescript
public readonly rulesInput: string[];
```

- *Type:* string[]

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FwPolicyV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts">FwPolicyV1Timeouts</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `audited`<sup>Required</sup> <a name="audited" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.audited"></a>

```typescript
public readonly audited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FwPolicyV1Config <a name="FwPolicyV1Config" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.Initializer"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

const fwPolicyV1Config: fwPolicyV1.FwPolicyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.audited">audited</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#audited FwPolicyV1#audited}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#description FwPolicyV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#id FwPolicyV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#name FwPolicyV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#region FwPolicyV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.rules">rules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#rules FwPolicyV1#rules}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#shared FwPolicyV1#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#tenant_id FwPolicyV1#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts">FwPolicyV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#value_specs FwPolicyV1#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `audited`<sup>Optional</sup> <a name="audited" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.audited"></a>

```typescript
public readonly audited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#audited FwPolicyV1#audited}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#description FwPolicyV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#id FwPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#name FwPolicyV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#region FwPolicyV1#region}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#rules FwPolicyV1#rules}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#shared FwPolicyV1#shared}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#tenant_id FwPolicyV1#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: FwPolicyV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts">FwPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#timeouts FwPolicyV1#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#value_specs FwPolicyV1#value_specs}.

---

### FwPolicyV1Timeouts <a name="FwPolicyV1Timeouts" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts.Initializer"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

const fwPolicyV1Timeouts: fwPolicyV1.FwPolicyV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#create FwPolicyV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#delete FwPolicyV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#create FwPolicyV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/fw_policy_v1#delete FwPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### FwPolicyV1TimeoutsOutputReference <a name="FwPolicyV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { fwPolicyV1 } from '@ithings/cdktf-provider-openstack'

new fwPolicyV1.FwPolicyV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts">FwPolicyV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FwPolicyV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.fwPolicyV1.FwPolicyV1Timeouts">FwPolicyV1Timeouts</a>

---



