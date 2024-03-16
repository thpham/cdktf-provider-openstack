# `containerinfraNodegroupV1` Submodule <a name="`containerinfraNodegroupV1` Submodule" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerinfraNodegroupV1 <a name="ContainerinfraNodegroupV1" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1 openstack_containerinfra_nodegroup_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

new containerinfraNodegroupV1.ContainerinfraNodegroupV1(scope: Construct, id: string, config: ContainerinfraNodegroupV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config">ContainerinfraNodegroupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config">ContainerinfraNodegroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetDockerVolumeSize">resetDockerVolumeSize</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetFlavorId">resetFlavorId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMergeLabels">resetMergeLabels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerinfraNodegroupV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>

---

##### `resetDockerVolumeSize` <a name="resetDockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetDockerVolumeSize"></a>

```typescript
public resetDockerVolumeSize(): void
```

##### `resetFlavorId` <a name="resetFlavorId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetFlavorId"></a>

```typescript
public resetFlavorId(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetLabels` <a name="resetLabels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMaxNodeCount"></a>

```typescript
public resetMaxNodeCount(): void
```

##### `resetMergeLabels` <a name="resetMergeLabels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMergeLabels"></a>

```typescript
public resetMergeLabels(): void
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMinNodeCount"></a>

```typescript
public resetMinNodeCount(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRole` <a name="resetRole" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isConstruct"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

containerinfraNodegroupV1.ContainerinfraNodegroupV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformElement"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformResource"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerinfraNodegroupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerinfraNodegroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerinfraNodegroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference">ContainerinfraNodegroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSizeInput">dockerVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorIdInput">flavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabelsInput">mergeLabelsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabels">mergeLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerinfraNodegroupV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference">ContainerinfraNodegroupV1TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `dockerVolumeSizeInput`<sup>Optional</sup> <a name="dockerVolumeSizeInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSizeInput"></a>

```typescript
public readonly dockerVolumeSizeInput: number;
```

- *Type:* number

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorIdInput"></a>

```typescript
public readonly flavorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `mergeLabelsInput`<sup>Optional</sup> <a name="mergeLabelsInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabelsInput"></a>

```typescript
public readonly mergeLabelsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerinfraNodegroupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `dockerVolumeSize`<sup>Required</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `mergeLabels`<sup>Required</sup> <a name="mergeLabels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabels"></a>

```typescript
public readonly mergeLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerinfraNodegroupV1Config <a name="ContainerinfraNodegroupV1Config" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.Initializer"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

const containerinfraNodegroupV1Config: containerinfraNodegroupV1.ContainerinfraNodegroupV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#cluster_id ContainerinfraNodegroupV1#cluster_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#name ContainerinfraNodegroupV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#docker_volume_size ContainerinfraNodegroupV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.flavorId">flavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#flavor_id ContainerinfraNodegroupV1#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#id ContainerinfraNodegroupV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#image_id ContainerinfraNodegroupV1#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#labels ContainerinfraNodegroupV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#max_node_count ContainerinfraNodegroupV1#max_node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.mergeLabels">mergeLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#merge_labels ContainerinfraNodegroupV1#merge_labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#min_node_count ContainerinfraNodegroupV1#min_node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#node_count ContainerinfraNodegroupV1#node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#region ContainerinfraNodegroupV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#role ContainerinfraNodegroupV1#role}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#cluster_id ContainerinfraNodegroupV1#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#name ContainerinfraNodegroupV1#name}.

---

##### `dockerVolumeSize`<sup>Optional</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#docker_volume_size ContainerinfraNodegroupV1#docker_volume_size}.

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#flavor_id ContainerinfraNodegroupV1#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#id ContainerinfraNodegroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#image_id ContainerinfraNodegroupV1#image_id}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#labels ContainerinfraNodegroupV1#labels}.

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#max_node_count ContainerinfraNodegroupV1#max_node_count}.

---

##### `mergeLabels`<sup>Optional</sup> <a name="mergeLabels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.mergeLabels"></a>

```typescript
public readonly mergeLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#merge_labels ContainerinfraNodegroupV1#merge_labels}.

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#min_node_count ContainerinfraNodegroupV1#min_node_count}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#node_count ContainerinfraNodegroupV1#node_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#region ContainerinfraNodegroupV1#region}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#role ContainerinfraNodegroupV1#role}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerinfraNodegroupV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#timeouts ContainerinfraNodegroupV1#timeouts}

---

### ContainerinfraNodegroupV1Timeouts <a name="ContainerinfraNodegroupV1Timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.Initializer"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

const containerinfraNodegroupV1Timeouts: containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#create ContainerinfraNodegroupV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#delete ContainerinfraNodegroupV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#update ContainerinfraNodegroupV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#create ContainerinfraNodegroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#delete ContainerinfraNodegroupV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#update ContainerinfraNodegroupV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerinfraNodegroupV1TimeoutsOutputReference <a name="ContainerinfraNodegroupV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { containerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

new containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerinfraNodegroupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>

---



