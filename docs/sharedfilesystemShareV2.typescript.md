# `sharedfilesystemShareV2` Submodule <a name="`sharedfilesystemShareV2` Submodule" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedfilesystemShareV2 <a name="SharedfilesystemShareV2" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2 openstack_sharedfilesystem_share_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

new sharedfilesystemShareV2.SharedfilesystemShareV2(scope: Construct, id: string, config: SharedfilesystemShareV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config">SharedfilesystemShareV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config">SharedfilesystemShareV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareNetworkId">resetShareNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareType">resetShareType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts"></a>

```typescript
public putTimeouts(value: SharedfilesystemShareV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetShareNetworkId` <a name="resetShareNetworkId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareNetworkId"></a>

```typescript
public resetShareNetworkId(): void
```

##### `resetShareType` <a name="resetShareType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetShareType"></a>

```typescript
public resetShareType(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SharedfilesystemShareV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isConstruct"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

sharedfilesystemShareV2.SharedfilesystemShareV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformElement"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformResource"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SharedfilesystemShareV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharedfilesystemShareV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharedfilesystemShareV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedfilesystemShareV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.allMetadata">allMetadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.exportLocations">exportLocations</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList">SharedfilesystemShareV2ExportLocationsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.hasReplicas">hasReplicas</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.replicationType">replicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareServerId">shareServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference">SharedfilesystemShareV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkIdInput">shareNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProtoInput">shareProtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareTypeInput">shareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkId">shareNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProto">shareProto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareType">shareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allMetadata`<sup>Required</sup> <a name="allMetadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.allMetadata"></a>

```typescript
public readonly allMetadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `exportLocations`<sup>Required</sup> <a name="exportLocations" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.exportLocations"></a>

```typescript
public readonly exportLocations: SharedfilesystemShareV2ExportLocationsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList">SharedfilesystemShareV2ExportLocationsList</a>

---

##### `hasReplicas`<sup>Required</sup> <a name="hasReplicas" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.hasReplicas"></a>

```typescript
public readonly hasReplicas: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `replicationType`<sup>Required</sup> <a name="replicationType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.replicationType"></a>

```typescript
public readonly replicationType: string;
```

- *Type:* string

---

##### `shareServerId`<sup>Required</sup> <a name="shareServerId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareServerId"></a>

```typescript
public readonly shareServerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeouts"></a>

```typescript
public readonly timeouts: SharedfilesystemShareV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference">SharedfilesystemShareV2TimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `shareNetworkIdInput`<sup>Optional</sup> <a name="shareNetworkIdInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkIdInput"></a>

```typescript
public readonly shareNetworkIdInput: string;
```

- *Type:* string

---

##### `shareProtoInput`<sup>Optional</sup> <a name="shareProtoInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProtoInput"></a>

```typescript
public readonly shareProtoInput: string;
```

- *Type:* string

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareTypeInput"></a>

```typescript
public readonly shareTypeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SharedfilesystemShareV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `shareNetworkId`<sup>Required</sup> <a name="shareNetworkId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareNetworkId"></a>

```typescript
public readonly shareNetworkId: string;
```

- *Type:* string

---

##### `shareProto`<sup>Required</sup> <a name="shareProto" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareProto"></a>

```typescript
public readonly shareProto: string;
```

- *Type:* string

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedfilesystemShareV2Config <a name="SharedfilesystemShareV2Config" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.Initializer"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

const sharedfilesystemShareV2Config: sharedfilesystemShareV2.SharedfilesystemShareV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#name SharedfilesystemShareV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareProto">shareProto</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_proto SharedfilesystemShareV2#share_proto}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#size SharedfilesystemShareV2#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#availability_zone SharedfilesystemShareV2#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#description SharedfilesystemShareV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#id SharedfilesystemShareV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#is_public SharedfilesystemShareV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#metadata SharedfilesystemShareV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#region SharedfilesystemShareV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareNetworkId">shareNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_network_id SharedfilesystemShareV2#share_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareType">shareType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_type SharedfilesystemShareV2#share_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#snapshot_id SharedfilesystemShareV2#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#name SharedfilesystemShareV2#name}.

---

##### `shareProto`<sup>Required</sup> <a name="shareProto" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareProto"></a>

```typescript
public readonly shareProto: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_proto SharedfilesystemShareV2#share_proto}.

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#size SharedfilesystemShareV2#size}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#availability_zone SharedfilesystemShareV2#availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#description SharedfilesystemShareV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#id SharedfilesystemShareV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#is_public SharedfilesystemShareV2#is_public}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#metadata SharedfilesystemShareV2#metadata}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#region SharedfilesystemShareV2#region}.

---

##### `shareNetworkId`<sup>Optional</sup> <a name="shareNetworkId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareNetworkId"></a>

```typescript
public readonly shareNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_network_id SharedfilesystemShareV2#share_network_id}.

---

##### `shareType`<sup>Optional</sup> <a name="shareType" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.shareType"></a>

```typescript
public readonly shareType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#share_type SharedfilesystemShareV2#share_type}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#snapshot_id SharedfilesystemShareV2#snapshot_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: SharedfilesystemShareV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#timeouts SharedfilesystemShareV2#timeouts}

---

### SharedfilesystemShareV2ExportLocations <a name="SharedfilesystemShareV2ExportLocations" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations.Initializer"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

const sharedfilesystemShareV2ExportLocations: sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations = { ... }
```


### SharedfilesystemShareV2Timeouts <a name="SharedfilesystemShareV2Timeouts" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.Initializer"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

const sharedfilesystemShareV2Timeouts: sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#create SharedfilesystemShareV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#delete SharedfilesystemShareV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#update SharedfilesystemShareV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#create SharedfilesystemShareV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#delete SharedfilesystemShareV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/sharedfilesystem_share_v2#update SharedfilesystemShareV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedfilesystemShareV2ExportLocationsList <a name="SharedfilesystemShareV2ExportLocationsList" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

new sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.get"></a>

```typescript
public get(index: number): SharedfilesystemShareV2ExportLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SharedfilesystemShareV2ExportLocationsOutputReference <a name="SharedfilesystemShareV2ExportLocationsOutputReference" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

new sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.preferred">preferred</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations">SharedfilesystemShareV2ExportLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.preferred"></a>

```typescript
public readonly preferred: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SharedfilesystemShareV2ExportLocations;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2ExportLocations">SharedfilesystemShareV2ExportLocations</a>

---


### SharedfilesystemShareV2TimeoutsOutputReference <a name="SharedfilesystemShareV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { sharedfilesystemShareV2 } from '@ithings/cdktf-provider-openstack'

new sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SharedfilesystemShareV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.sharedfilesystemShareV2.SharedfilesystemShareV2Timeouts">SharedfilesystemShareV2Timeouts</a>

---



