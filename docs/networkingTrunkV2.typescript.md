# `networkingTrunkV2` Submodule <a name="`networkingTrunkV2` Submodule" id="@ithings/cdktf-provider-openstack.networkingTrunkV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingTrunkV2 <a name="NetworkingTrunkV2" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2 openstack_networking_trunk_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.Initializer"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

new networkingTrunkV2.NetworkingTrunkV2(scope: Construct, id: string, config: NetworkingTrunkV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config">NetworkingTrunkV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config">NetworkingTrunkV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.putSubPort">putSubPort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetSubPort">resetSubPort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubPort` <a name="putSubPort" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.putSubPort"></a>

```typescript
public putSubPort(value: IResolvable | NetworkingTrunkV2SubPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.putSubPort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkingTrunkV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts">NetworkingTrunkV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubPort` <a name="resetSubPort" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetSubPort"></a>

```typescript
public resetSubPort(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingTrunkV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isConstruct"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

networkingTrunkV2.NetworkingTrunkV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isTerraformElement"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

networkingTrunkV2.NetworkingTrunkV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isTerraformResource"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

networkingTrunkV2.NetworkingTrunkV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.generateConfigForImport"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

networkingTrunkV2.NetworkingTrunkV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkingTrunkV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkingTrunkV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkingTrunkV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingTrunkV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.subPort">subPort</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList">NetworkingTrunkV2SubPortList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference">NetworkingTrunkV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.portIdInput">portIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.subPortInput">subPortInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts">NetworkingTrunkV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.portId">portId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `subPort`<sup>Required</sup> <a name="subPort" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.subPort"></a>

```typescript
public readonly subPort: NetworkingTrunkV2SubPortList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList">NetworkingTrunkV2SubPortList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingTrunkV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference">NetworkingTrunkV2TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portIdInput`<sup>Optional</sup> <a name="portIdInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.portIdInput"></a>

```typescript
public readonly portIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subPortInput`<sup>Optional</sup> <a name="subPortInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.subPortInput"></a>

```typescript
public readonly subPortInput: IResolvable | NetworkingTrunkV2SubPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkingTrunkV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts">NetworkingTrunkV2Timeouts</a>

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portId`<sup>Required</sup> <a name="portId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingTrunkV2Config <a name="NetworkingTrunkV2Config" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.Initializer"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

const networkingTrunkV2Config: networkingTrunkV2.NetworkingTrunkV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.portId">portId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#port_id NetworkingTrunkV2#port_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#admin_state_up NetworkingTrunkV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#description NetworkingTrunkV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#id NetworkingTrunkV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#name NetworkingTrunkV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#region NetworkingTrunkV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.subPort">subPort</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>[]</code> | sub_port block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#tags NetworkingTrunkV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#tenant_id NetworkingTrunkV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts">NetworkingTrunkV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `portId`<sup>Required</sup> <a name="portId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#port_id NetworkingTrunkV2#port_id}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#admin_state_up NetworkingTrunkV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#description NetworkingTrunkV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#id NetworkingTrunkV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#name NetworkingTrunkV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#region NetworkingTrunkV2#region}.

---

##### `subPort`<sup>Optional</sup> <a name="subPort" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.subPort"></a>

```typescript
public readonly subPort: IResolvable | NetworkingTrunkV2SubPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>[]

sub_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#sub_port NetworkingTrunkV2#sub_port}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#tags NetworkingTrunkV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#tenant_id NetworkingTrunkV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingTrunkV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts">NetworkingTrunkV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#timeouts NetworkingTrunkV2#timeouts}

---

### NetworkingTrunkV2SubPort <a name="NetworkingTrunkV2SubPort" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort.Initializer"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

const networkingTrunkV2SubPort: networkingTrunkV2.NetworkingTrunkV2SubPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort.property.portId">portId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#port_id NetworkingTrunkV2#port_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort.property.segmentationId">segmentationId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#segmentation_id NetworkingTrunkV2#segmentation_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort.property.segmentationType">segmentationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#segmentation_type NetworkingTrunkV2#segmentation_type}. |

---

##### `portId`<sup>Required</sup> <a name="portId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#port_id NetworkingTrunkV2#port_id}.

---

##### `segmentationId`<sup>Required</sup> <a name="segmentationId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort.property.segmentationId"></a>

```typescript
public readonly segmentationId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#segmentation_id NetworkingTrunkV2#segmentation_id}.

---

##### `segmentationType`<sup>Required</sup> <a name="segmentationType" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort.property.segmentationType"></a>

```typescript
public readonly segmentationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#segmentation_type NetworkingTrunkV2#segmentation_type}.

---

### NetworkingTrunkV2Timeouts <a name="NetworkingTrunkV2Timeouts" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts.Initializer"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

const networkingTrunkV2Timeouts: networkingTrunkV2.NetworkingTrunkV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#create NetworkingTrunkV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#delete NetworkingTrunkV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#create NetworkingTrunkV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_trunk_v2#delete NetworkingTrunkV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingTrunkV2SubPortList <a name="NetworkingTrunkV2SubPortList" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.Initializer"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

new networkingTrunkV2.NetworkingTrunkV2SubPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.get"></a>

```typescript
public get(index: number): NetworkingTrunkV2SubPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingTrunkV2SubPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>[]

---


### NetworkingTrunkV2SubPortOutputReference <a name="NetworkingTrunkV2SubPortOutputReference" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

new networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.portIdInput">portIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationIdInput">segmentationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationTypeInput">segmentationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.portId">portId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationId">segmentationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationType">segmentationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portIdInput`<sup>Optional</sup> <a name="portIdInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.portIdInput"></a>

```typescript
public readonly portIdInput: string;
```

- *Type:* string

---

##### `segmentationIdInput`<sup>Optional</sup> <a name="segmentationIdInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationIdInput"></a>

```typescript
public readonly segmentationIdInput: number;
```

- *Type:* number

---

##### `segmentationTypeInput`<sup>Optional</sup> <a name="segmentationTypeInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationTypeInput"></a>

```typescript
public readonly segmentationTypeInput: string;
```

- *Type:* string

---

##### `portId`<sup>Required</sup> <a name="portId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

---

##### `segmentationId`<sup>Required</sup> <a name="segmentationId" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationId"></a>

```typescript
public readonly segmentationId: number;
```

- *Type:* number

---

##### `segmentationType`<sup>Required</sup> <a name="segmentationType" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.segmentationType"></a>

```typescript
public readonly segmentationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingTrunkV2SubPort;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2SubPort">NetworkingTrunkV2SubPort</a>

---


### NetworkingTrunkV2TimeoutsOutputReference <a name="NetworkingTrunkV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { networkingTrunkV2 } from '@ithings/cdktf-provider-openstack'

new networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts">NetworkingTrunkV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingTrunkV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingTrunkV2.NetworkingTrunkV2Timeouts">NetworkingTrunkV2Timeouts</a>

---



